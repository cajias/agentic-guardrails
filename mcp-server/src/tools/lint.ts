import { runEslint, EslintIssue } from '../runners/eslint.js';
import { runPrettier } from '../runners/prettier.js';

export interface LintInput {
  path: string;
  language?: 'typescript' | 'python' | 'auto';
}

export interface LintIssue {
  file: string;
  line: number;
  column: number;
  rule: string;
  message: string;
  severity: 'error' | 'warning';
  fixable: boolean;
  claudeFixable: boolean;
}

export interface LintResult {
  issues: LintIssue[];
  summary: {
    errors: number;
    warnings: number;
    fixable: number;
    claudeFixable: number;
    total: number;
  };
}

// Rules that Claude can fix by understanding and refactoring code
const CLAUDE_FIXABLE_RULES = new Set([
  // Complexity rules - need human/AI understanding to refactor
  'complexity',
  'max-lines-per-function',
  'max-depth',
  'max-params',
  'max-statements',
  'sonarjs/cognitive-complexity',
  'sonarjs/no-identical-functions',

  // Type rules - need context to determine correct types
  '@typescript-eslint/no-explicit-any',
  '@typescript-eslint/no-unsafe-assignment',
  '@typescript-eslint/no-unsafe-call',
  '@typescript-eslint/no-unsafe-member-access',
  '@typescript-eslint/no-unsafe-return',
  '@typescript-eslint/no-unsafe-argument',
  '@typescript-eslint/explicit-function-return-type',
  '@typescript-eslint/explicit-module-boundary-types',

  // Dead code - need to understand if truly unused
  '@typescript-eslint/no-unused-vars',
  'no-unused-vars',

  // Promise/async issues - need understanding of flow
  '@typescript-eslint/no-floating-promises',
  '@typescript-eslint/no-misused-promises',
  '@typescript-eslint/require-await',

  // Naming conventions - need context for appropriate names
  '@typescript-eslint/naming-convention',
  'camelcase',

  // Circular dependencies - need architecture understanding
  'import/no-cycle',
]);

function isClaudeFixable(rule: string): boolean {
  return CLAUDE_FIXABLE_RULES.has(rule);
}

function transformEslintIssue(issue: EslintIssue): LintIssue {
  const isAutoFixable = issue.fix !== undefined;
  const isClaude = !isAutoFixable && isClaudeFixable(issue.ruleId ?? '');

  return {
    file: issue.filePath,
    line: issue.line,
    column: issue.column,
    rule: issue.ruleId ?? 'unknown',
    message: issue.message,
    severity: issue.severity === 2 ? 'error' : 'warning',
    fixable: isAutoFixable,
    claudeFixable: isClaude,
  };
}

export async function lint(input: LintInput): Promise<LintResult> {
  const { path, language = 'auto' } = input;

  const issues: LintIssue[] = [];

  // Determine language
  const detectedLanguage = language === 'auto' ? detectLanguage(path) : language;

  if (detectedLanguage === 'typescript' || detectedLanguage === 'auto') {
    // Run ESLint
    const eslintResult = await runEslint(path, false);
    for (const fileResult of eslintResult) {
      for (const msg of fileResult.messages) {
        issues.push(
          transformEslintIssue({
            ...msg,
            filePath: fileResult.filePath,
          })
        );
      }
    }

    // Run Prettier check
    const prettierResult = await runPrettier(path, false);
    for (const file of prettierResult.unformatted) {
      issues.push({
        file,
        line: 1,
        column: 1,
        rule: 'prettier/prettier',
        message: 'File is not formatted according to Prettier rules',
        severity: 'error',
        fixable: true,
        claudeFixable: false,
      });
    }
  }

  // TODO: Add Python support (ruff, mypy)

  // Calculate summary
  const errors = issues.filter((i) => i.severity === 'error').length;
  const warnings = issues.filter((i) => i.severity === 'warning').length;
  const fixable = issues.filter((i) => i.fixable).length;
  const claudeFixable = issues.filter((i) => i.claudeFixable).length;

  return {
    issues,
    summary: {
      errors,
      warnings,
      fixable,
      claudeFixable,
      total: issues.length,
    },
  };
}

function detectLanguage(path: string): 'typescript' | 'python' | 'auto' {
  // Simple heuristic - check file extension or look for config files
  if (
    path.endsWith('.ts') ||
    path.endsWith('.tsx') ||
    path.endsWith('.js') ||
    path.endsWith('.jsx')
  ) {
    return 'typescript';
  }
  if (path.endsWith('.py')) {
    return 'python';
  }
  // Default to auto which will try TypeScript
  return 'auto';
}
