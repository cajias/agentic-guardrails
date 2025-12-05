# README Writer Procedure

Detailed step-by-step workflow for creating exceptional README documentation.

## Prerequisites

- Access to the project's source code
- Read and Edit tool access
- Understanding of the project type (library, CLI, app, docs)

---

## Step 1: Discovery Phase

### 1.1 Identify Project Type

Determine what kind of project this is:

| Type              | Characteristics        | README Focus            |
| ----------------- | ---------------------- | ----------------------- |
| **Library**       | Importable module      | API docs, code examples |
| **CLI Tool**      | Command-line interface | Command examples, flags |
| **Application**   | Standalone app         | Screenshots, features   |
| **Documentation** | Knowledge base         | Navigation, structure   |

### 1.2 Explore the Codebase

Read these files to understand the project:

```
1. package.json / pyproject.toml / Cargo.toml  → Name, description, dependencies
2. src/index.* or lib/*                         → Main exports, API surface
3. bin/* or cli.*                               → CLI commands
4. examples/ or example.*                       → Usage patterns
5. test/ or *_test.*                            → Expected behavior
6. Existing README.md                           → Current state
```

### 1.3 Extract Key Information

Gather these details:

- **Name**: Official package/repo name
- **Purpose**: What problem does it solve?
- **Target Audience**: Who uses this?
- **Main Features**: Top 3-5 capabilities
- **Installation Method**: npm, pip, cargo, etc.
- **License**: MIT, Apache, GPL, etc.
- **Dependencies**: Any unusual requirements?

---

## Step 2: Write the One-Liner

The one-liner is critical. It must:

- Be **120 characters or less**
- Explain **what** the project does
- Define any **unfamiliar terms**
- Match the package.json/pyproject.toml description

### Good One-Liner Patterns

```markdown
# Pattern 1: Action-focused

"A fast HTTP client for Node.js with automatic retries and timeout handling."

# Pattern 2: Problem-solution

"Parse and manipulate URLs without the pain of Python's urllib."

# Pattern 3: Comparison

"Like lodash, but for dates—a modern JavaScript date utility library."

# Pattern 4: Target audience

"A React component library for building accessible data tables."
```

### Bad One-Liner Patterns

```markdown
# Too vague

"A useful utility library."

# Too long

"This is a comprehensive library that provides many useful functions for working with strings, arrays, objects, and other data types in JavaScript applications."

# Marketing speak

"The ultimate solution for all your data processing needs!"
```

---

## Step 3: Create Usage Examples

### 3.1 The Minimal Example

Show the most common use case in **10 lines or less**:

```markdown
## Usage

\`\`\`javascript
import { fetch } from 'super-fetch';

const data = await fetch('https://api.example.com/users');
console.log(data);
\`\`\`
```

### 3.2 Progressive Complexity

If needed, add 1-2 more examples showing:

1. Basic usage (always first)
2. Common options/configuration
3. Advanced use case (link to docs instead if complex)

### 3.3 Example Formats by Project Type

**Library (Python)**:

```python
>>> import mylib
>>> mylib.process("input")
'output'
```

**CLI Tool**:

```bash
$ mytool --input file.txt --output result.json
Processing... done!
```

**React Component**:

```jsx
import { Button } from 'my-ui';

function App() {
  return <Button onClick={() => alert('clicked!')}>Click me</Button>;
}
```

---

## Step 4: Write Installation Instructions

### 4.1 The One-Liner Install

Always provide a single command:

```markdown
## Installation

\`\`\`bash
npm install my-package
\`\`\`
```

### 4.2 Platform-Specific Instructions

If needed, show alternatives:

```markdown
## Installation

\`\`\`bash

# npm

npm install my-package

# yarn

yarn add my-package

# pnpm

pnpm add my-package
\`\`\`
```

### 4.3 Requirements

State minimum requirements clearly:

```markdown
**Requirements:**

- Node.js 18+
- Python 3.9+
- macOS, Linux, or Windows
```

### 4.4 What NOT to Include

- Development setup (put in CONTRIBUTING.md)
- Build from source (put in DEVELOPMENT.md)
- Complex configuration (put in docs/)

---

## Step 5: Document the API (If Applicable)

### 5.1 When to Include API Docs

- **Include in README**: Small API surface (< 10 functions)
- **Separate file**: Large API (link to API.md or docs site)

### 5.2 API Documentation Format

```markdown
## API

### `functionName(param1, param2, [options])`

Brief description of what this function does.

**Parameters:**

- `param1` (string) - Description
- `param2` (number) - Description
- `options` (object, optional)
  - `timeout` (number) - Timeout in ms. Default: `5000`
  - `retries` (number) - Retry count. Default: `3`

**Returns:** `Promise<Result>` - Description of return value

**Example:**
\`\`\`javascript
const result = await functionName('input', 42, { timeout: 10000 });
\`\`\`
```

### 5.3 Type Information

Always specify:

- Parameter types
- Return types
- Optional parameters (use `[]` brackets)
- Default values

---

## Step 6: Add Contributing Section

### 6.1 Minimal Version

```markdown
## Contributing

Contributions are welcome! Please read our [Contributing Guide](CONTRIBUTING.md) before submitting a PR.
```

### 6.2 Expanded Version

```markdown
## Contributing

We love contributions! Here's how to get started:

1. **Questions?** Open a [Discussion](link)
2. **Bug reports?** Open an [Issue](link)
3. **Code contributions?** See [CONTRIBUTING.md](CONTRIBUTING.md)

Please read our [Code of Conduct](CODE_OF_CONDUCT.md) before participating.
```

---

## Step 7: Add License Section

### 7.1 Standard Format

```markdown
## License

MIT © [Author Name](https://github.com/username)
```

### 7.2 With Link to Full License

```markdown
## License

[MIT](LICENSE) © 2024 Author Name
```

---

## Step 8: Optional Enhancements

### 8.1 Badges (Use Sparingly)

Only add badges that provide **real value** to users:

```markdown
[![npm version](https://badge.fury.io/js/package.svg)](https://npmjs.com/package/package)
[![CI](https://github.com/user/repo/actions/workflows/ci.yml/badge.svg)](https://github.com/user/repo/actions)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)
```

**Good badges**: Version, CI status, License, Downloads
**Avoid**: Code coverage (unless >90%), social badges, redundant info

### 8.2 Table of Contents

Add if README exceeds 100 lines:

```markdown
## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [API](#api)
- [Contributing](#contributing)
- [License](#license)
```

### 8.3 Background Section

Include if:

- Project relies on specialized concepts
- Similar projects exist (explain differentiation)
- Historical context is important

```markdown
## Background

This project was created because existing solutions like X and Y
didn't handle Z well. Our approach differs by...
```

### 8.4 Screenshots/GIFs

For visual tools:

- Keep images under 1MB
- Use relative paths (`./assets/screenshot.png`)
- Add alt text for accessibility

---

## Step 9: Final Checklist

Before finishing, verify:

- [ ] Title matches package/repo name
- [ ] One-liner is ≤120 characters
- [ ] One-liner matches package.json description
- [ ] Usage example is runnable
- [ ] Installation is a one-liner
- [ ] All code blocks have syntax highlighting
- [ ] License is specified
- [ ] No broken links
- [ ] Cognitive funneling applied (broad → specific)
- [ ] Caveats/limitations mentioned upfront
- [ ] No critical info depends on external images

---

## Common Mistakes to Avoid

### 1. Too Much Information

❌ Don't include everything. Link to separate docs for:

- Full API reference
- Development setup
- Changelog
- Architecture details

### 2. No Runnable Examples

❌ Don't show code that won't work
✅ Test every code example

### 3. Assuming Knowledge

❌ Don't assume users know your domain
✅ Define unfamiliar terms or link to explanations

### 4. Marketing Language

❌ "The best library ever!"
✅ "A library for X that does Y"

### 5. Outdated Information

❌ Unmaintained badges, old API examples
✅ Keep examples in sync with current version

---

## Example README Structure

```markdown
# project-name

> A brief description of what this project does (≤120 chars)

[![npm](badge)](link) [![CI](badge)](link) [![License](badge)](link)

## Installation

\`\`\`bash
npm install project-name
\`\`\`

## Usage

\`\`\`javascript
import { main } from 'project-name';
main();
\`\`\`

## API

### `main([options])`

Does the main thing.

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md)

## License

MIT © Author
```
