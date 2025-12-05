# README Template

Copy this template and fill in the sections. Delete any optional sections you don't need.

## {project-name}

> {One-liner description - max 120 characters}

{badges - optional}

## Highlights

- {Main feature or benefit}
- {Second feature}
- {Third feature}

## Installation

```bash
{package-manager} install {package-name}
```

**Requirements:** {runtime} {version}+

## Usage

```{language}
{minimal usage example - 10 lines or less}
```

{Optional: 1-2 more examples for common use cases}

## API

{For small APIs only - otherwise link to docs}

### `{functionName}({params})`

{Brief description}

**Parameters:**

- `{param}` ({type}) - {description}

**Returns:** `{type}` - {description}

## Background

{Optional: Why this project exists, motivation, related projects}

## Contributing

Contributions welcome! Please see [CONTRIBUTING.md](CONTRIBUTING.md).

- Questions? Open a [Discussion]({link})
- Bugs? Open an [Issue]({link})

## License

{license} © {year} {author}

---

## Template Variants

## Minimal (Library)

```markdown
# my-lib

> Parse URLs without the pain of urllib

## Installation

\`\`\`bash
pip install my-lib
\`\`\`

## Usage

\`\`\`python
from mylib import parse
parse("https://example.com/path?q=1")

# {'host': 'example.com', 'path': '/path', 'query': {'q': '1'}}

\`\`\`

## License

MIT © 2024 Your Name
```

## CLI Tool

```markdown
# my-cli

> Convert images to WebP format from the command line

## Installation

\`\`\`bash
npm install -g my-cli
\`\`\`

## Usage

\`\`\`bash

# Convert a single file

my-cli image.png

# Convert all images in a directory

my-cli ./images --output ./webp

# With quality setting

my-cli image.png --quality 80
\`\`\`

## Options

| Flag              | Description            | Default |
| ----------------- | ---------------------- | ------- |
| `-o, --output`    | Output directory       | `.`     |
| `-q, --quality`   | Quality (1-100)        | `85`    |
| `-r, --recursive` | Process subdirectories | `false` |

## License

MIT © 2024 Your Name
```

## React Component Library

```markdown
# my-components

> Accessible React components for building data-rich applications

[![npm](https://img.shields.io/npm/v/my-components)](https://npmjs.com/my-components)

## Installation

\`\`\`bash
npm install my-components
\`\`\`

## Usage

\`\`\`jsx
import { DataTable, Button } from 'my-components';

function App() {
return (
<DataTable
data={users}
columns={['name', 'email', 'role']}
onRowClick={(row) => console.log(row)}
/>
);
}
\`\`\`

## Components

- `DataTable` - Sortable, filterable data tables
- `Button` - Accessible button with variants
- `Modal` - Focus-trapped modal dialogs
- `Form` - Form components with validation

[Full documentation →](https://my-components.dev)

## License

MIT © 2024 Your Name
```

## Full Featured

```markdown
# super-project

> A comprehensive toolkit for building real-time collaborative applications

[![npm version](https://badge.fury.io/js/super-project.svg)](https://npmjs.com/super-project)
[![CI](https://github.com/user/super-project/workflows/CI/badge.svg)](https://github.com/user/super-project/actions)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)

## Highlights

- Real-time sync with conflict resolution
- Works offline with automatic reconnection
- TypeScript-first with full type safety
- Framework agnostic (React, Vue, Svelte adapters)

## Installation

\`\`\`bash
npm install super-project
\`\`\`

**Requirements:** Node.js 18+

## Quick Start

\`\`\`typescript
import { createClient } from 'super-project';

const client = createClient({
url: 'wss://your-server.com',
auth: { token: 'your-token' }
});

// Subscribe to real-time updates
client.subscribe('documents', (doc) => {
console.log('Document updated:', doc);
});

// Make changes
await client.update('documents', 'doc-1', { title: 'New Title' });
\`\`\`

## Framework Adapters

\`\`\`bash

# React

npm install @super-project/react

# Vue

npm install @super-project/vue

# Svelte

npm install @super-project/svelte
\`\`\`

## Documentation

- [Getting Started](https://docs.super-project.dev/start)
- [API Reference](https://docs.super-project.dev/api)
- [Examples](https://github.com/user/super-project/tree/main/examples)

## Background

Super Project was created to solve the complexity of building real-time
collaborative features. Unlike Socket.io or Firebase, it provides:

- Automatic conflict resolution using CRDTs
- Built-in presence and awareness
- Offline-first architecture

## Contributing

We welcome contributions! Please see our [Contributing Guide](CONTRIBUTING.md).

- **Questions?** [Start a Discussion](https://github.com/user/super-project/discussions)
- **Found a bug?** [Open an Issue](https://github.com/user/super-project/issues)
- **Want to help?** Check out [Good First Issues](https://github.com/user/super-project/labels/good%20first%20issue)

## Maintainers

- [@username](https://github.com/username) - Creator

## Acknowledgements

Thanks to the [Yjs](https://github.com/yjs/yjs) team for CRDT inspiration.

## License

[MIT](LICENSE) © 2024 Your Name
```
