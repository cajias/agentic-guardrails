# README Writer Skill

> AI-powered skill for creating exceptional README documentation

## What It Does

This skill helps Claude write READMEs that:

1. **Hook readers** with a compelling one-liner
2. **Demonstrate value** through runnable examples
3. **Respect time** using cognitive funneling (broad → specific)
4. **Enable evaluation** so users can quickly decide if the project fits their needs

## Installation

### 1. Copy Skill Files

```bash
mkdir -p ~/.claude/skills/readme-writer
cp skill.md PROCEDURE.md TEMPLATE.md README.md ~/.claude/skills/readme-writer/
```

### 2. Use the Skill

In a Claude Code session:

```
You: Write a README for this project

Claude: [Explores codebase, creates README following best practices]
```

Or for an existing README:

```
You: Improve this README

Claude: [Reviews and enhances the README]
```

## What Makes a Great README

### The Four Questions

Every README must help users quickly answer:

| Question                    | README Section           |
| --------------------------- | ------------------------ |
| Does this solve my problem? | Name + One-liner + Usage |
| Can I use this code?        | License + Installation   |
| Who made this?              | Author/Maintainers       |
| How can I learn more?       | API docs + Links         |

### Cognitive Funneling

Structure information like an inverted funnel:

```
┌─────────────────────────────────────┐
│  Name + One-liner (everyone reads)  │
├─────────────────────────────────────┤
│    Usage Example (most read)        │
├─────────────────────────────────────┤
│      Installation (many read)       │
├─────────────────────────────────────┤
│        API Details (some read)      │
├─────────────────────────────────────┤
│         Advanced (few read)         │
└─────────────────────────────────────┘
```

### Required Sections

In this order:

1. **Title** - Matches package/repo name
2. **One-liner** - ≤120 characters, explains purpose
3. **Usage** - Runnable code example
4. **Installation** - One-liner command
5. **Contributing** - How to get involved
6. **License** - Always last

## Files

| File           | Purpose                            |
| -------------- | ---------------------------------- |
| `skill.md`     | Core skill definition and workflow |
| `PROCEDURE.md` | Detailed step-by-step instructions |
| `TEMPLATE.md`  | Reusable README templates          |
| `README.md`    | This file                          |

## Key Principles

### Brevity

> "The ideal README is as short as it can be without being any shorter."

Extensive documentation belongs in separate files. The README is an entry point, not a manual.

### Show, Don't Tell

- Code examples over prose
- Screenshots for visual tools
- Runnable example files

### Respect User Time

- Clear headers for navigation
- Bullet points over paragraphs
- Syntax-highlighted code blocks

## Example Session

```
User: Write a README for this project

Claude: Let me explore the codebase first...

[Reads package.json, src/index.ts, examples/]

I found:
- Name: super-fetch
- Purpose: HTTP client with retries
- Main export: fetch() function
- License: MIT

Creating README with cognitive funneling:
1. One-liner: "A fast HTTP client with automatic retries"
2. Usage: Basic fetch example
3. Installation: npm install super-fetch
4. API: fetch() function signature
5. License: MIT

[Creates README.md]

Done! The README includes:
- Compelling one-liner (95 chars)
- Runnable usage example
- One-line installation
- API documentation
- MIT license
```

## Resources

Based on best practices from:

- [Art of README](https://github.com/hackergrrl/art-of-readme) - Philosophy and principles
- [Standard README](https://github.com/RichardLitt/standard-readme) - Specification
- [README Template](https://github.com/banesullivan/README) - Templates and examples

## License

MIT
