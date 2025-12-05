import { runEslint } from '../runners/eslint.js';
import { runPrettier } from '../runners/prettier.js';

export interface FixInput {
  path: string;
  language?: 'typescript' | 'python' | 'auto';
}

export interface FixResult {
  fixed: {
    eslint: number;
    prettier: number;
    total: number;
  };
  files: string[];
}

export async function fix(input: FixInput): Promise<FixResult> {
  const { path, language = 'auto' } = input;

  const fixedFiles = new Set<string>();
  let eslintFixed = 0;
  let prettierFixed = 0;

  // Determine language
  const detectedLanguage = language === 'auto' ? detectLanguage(path) : language;

  if (detectedLanguage === 'typescript' || detectedLanguage === 'auto') {
    // Run ESLint with --fix
    const eslintBefore = await runEslint(path, false);
    const beforeCount = eslintBefore.reduce(
      (sum, f) => sum + f.messages.filter((m) => m.fix !== undefined).length,
      0
    );

    await runEslint(path, true);

    const eslintAfter = await runEslint(path, false);
    const afterCount = eslintAfter.reduce(
      (sum, f) => sum + f.messages.filter((m) => m.fix !== undefined).length,
      0
    );

    eslintFixed = beforeCount - afterCount;

    // Track files that were fixed
    for (const file of eslintBefore) {
      const afterFile = eslintAfter.find((f) => f.filePath === file.filePath);
      if (afterFile && file.messages.length > afterFile.messages.length) {
        fixedFiles.add(file.filePath);
      }
    }

    // Run Prettier with --write
    const prettierBefore = await runPrettier(path, false);
    await runPrettier(path, true);
    const prettierAfter = await runPrettier(path, false);

    prettierFixed = prettierBefore.unformatted.length - prettierAfter.unformatted.length;

    for (const file of prettierBefore.unformatted) {
      if (!prettierAfter.unformatted.includes(file)) {
        fixedFiles.add(file);
      }
    }
  }

  // TODO: Add Python support (ruff --fix)

  return {
    fixed: {
      eslint: eslintFixed,
      prettier: prettierFixed,
      total: eslintFixed + prettierFixed,
    },
    files: Array.from(fixedFiles),
  };
}

function detectLanguage(path: string): 'typescript' | 'python' | 'auto' {
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
  return 'auto';
}
