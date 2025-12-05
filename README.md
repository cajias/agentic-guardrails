# Agentic Guardrails

Strict, opinionated linter configs for Python and TypeScript.

## Highlights

- **Minimal ignores** - Only rules that conflict with formatters
- **Maximum strictness** - All quality checks enabled
- **Easy adoption** - One-liner install

## Usage

```bash
# TypeScript/JavaScript
npm install @agentic-guardrails/eslint-config
npx eslint . --config node_modules/@agentic-guardrails/eslint-config/eslint.config.js

# Python
pip install agentic-guardrails
ruff check .
mypy .
```

## Installation

### TypeScript/JavaScript

```bash
npm install @agentic-guardrails/eslint-config
```

Create `eslint.config.js`:

```javascript
import config from '@agentic-guardrails/eslint-config';
export default config;
```

### Python

```bash
pip install agentic-guardrails
```

Extend in `pyproject.toml`:

```toml
[tool.ruff]
extend = "pyproject-linters.toml"
```

## What's Included

### Python

- **Ruff** - 40+ rule categories
- **MyPy** - Strict type checking
- **Black** - Code formatting
- **Pylint** - Duplicate code detection

### TypeScript/JavaScript

- **ESLint** - 200+ rules
- **Prettier** - Code formatting
- **Security plugins** - Vulnerability detection
- **Complexity limits** - Max 10

See [Python README](./python/README.md) and [TypeScript README](./typescript/README.md) for details.

## MCP Server

An MCP server is included for Claude Code integration:

```bash
npm install -g @cajias/guardrails-mcp
claude mcp add guardrails -- npx @cajias/guardrails-mcp
```

Provides `lint` and `fix` tools for automated code quality workflows.

## CI/CD Integration

```yaml
# .github/workflows/lint.yml
name: Lint
on: [push, pull_request]
jobs:
  lint:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - run: pip install -e ".[dev]"
      - run: ruff check . && mypy .
```

## Contributing

1. Open an issue explaining the change
2. Get consensus
3. Make the change and open a PR

Config changes affect all projects using these configs. Be conservative.

## License

MIT
