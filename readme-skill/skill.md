# README Writer

AI-powered skill for creating exceptional README documentation that helps users quickly evaluate and adopt your software.

## Trigger

This skill activates when the user asks to:

- "Write a README"
- "Create documentation for this project"
- "Help me document this repo"
- "Make a README for this"
- "Improve this README"
- "Review my README"

## Core Philosophy

> "Your documentation is a direct reflection of your software, so hold it to the same standards."

A README is often the **only** exposure potential users have to your work. Your job isn't to "sell" people on your work—it's to let them evaluate what your creation does as objectively as possible.

## Cognitive Funneling Principle

Structure content like an **inverted funnel**:

1. Broadest, most pertinent details first
2. Progressively more specific information
3. Deep technical details last

This respects users' time by enabling fast decision-making about whether the project meets their needs.

## The Four Questions

Every README must help users quickly answer:

1. **Does this solve my problem?** → Name + One-liner + Usage example
2. **Can I use this code?** → License + Installation
3. **Who made this?** → Author/Maintainers
4. **How can I learn more?** → API docs + Links

## Workflow Overview

### Phase 1: Discovery

1. Explore the codebase to understand what it does
2. Identify the primary use case and target audience
3. Find existing documentation, examples, and configuration
4. Determine the project type (library, CLI, app, documentation)

### Phase 2: Structure

1. Apply cognitive funneling - most important info first
2. Select appropriate sections based on project type
3. Ensure all required sections are present

### Phase 3: Content Creation

1. Write a compelling one-liner (max 120 characters)
2. Create minimal, runnable usage examples
3. Document installation with one-liner commands
4. Add API documentation if applicable
5. Include contribution guidelines

### Phase 4: Polish

1. Add badges judiciously (only those providing real value)
2. Ensure all code examples are correct and runnable
3. Add links to related resources
4. Verify no broken links

## Section Priority (Required First)

### Required Sections (In Order)

1. **Title** - Must match repo/package name
2. **One-liner** - Max 120 chars, explains purpose
3. **Usage** - Code block showing common usage
4. **Installation** - How to install (one-liner preferred)
5. **Contributing** - How to get involved
6. **License** - Always last section

### Optional Sections (In Order)

- Banner/Logo (after title)
- Badges (after banner)
- Long Description (after one-liner)
- Table of Contents (if >100 lines)
- Background (motivation, context)
- API Documentation
- Maintainers
- Acknowledgements

## Key Principles

### Brevity Over Length

The ideal README is "as short as it can be without being any shorter." Extensive docs belong in separate files.

### No README = No Abstraction

Without documentation, developers must read source code. Strong documentation separates interface from implementation.

### Aggressive Linkification

Link to related modules, concepts, terminology. This costs little but adds tremendous value.

### Show, Don't Tell

- Use code examples over prose explanations
- Include screenshots/GIFs for visual tools
- Provide runnable example files when possible

### Respect User Time

Most people skim. Use:

- Clear headers for navigation
- Code blocks with syntax highlighting
- Bullet points over paragraphs
- Emoji in headers sparingly for visual breaks

## See Also

- `PROCEDURE.md` - Detailed step-by-step workflow
- `TEMPLATE.md` - Reusable README template
- `README.md` - Installation and usage of this skill
