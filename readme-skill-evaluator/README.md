# README Evaluator Skill

> Identify README problems and learn how to fix them

## What It Does

This skill analyzes your README and provides:

1. **Problems found** - categorized by severity
2. **Why each matters** - the impact on users
3. **How to fix** - specific, actionable solutions
4. **Items to remove** - bloat and redundancy
5. **Missing elements** - what should be added

## Installation

```bash
mkdir -p ~/.claude/skills/readme-evaluator
cp skill.md PROCEDURE.md README.md ~/.claude/skills/readme-evaluator/
```

## Usage

```
You: Evaluate this README

Claude: [Reads README, identifies problems, explains fixes]
```

## What We Check

### The Four Questions Test

Every README must help users answer:

1. Does this solve my problem? → One-liner + Usage
2. Can I use this code? → License
3. Who made this? → Author info
4. How can I learn more? → Links

### Problem Categories

| Category      | Examples                                       |
| ------------- | ---------------------------------------------- |
| **Content**   | Missing one-liner, no examples, no license     |
| **Structure** | Wrong section order, walls of text             |
| **Tone**      | Marketing speak, condescending, jargon         |
| **Bloat**     | Too many badges, misplaced content, redundancy |

## Example Output

```markdown
## README Problems Found

### Critical (Must Fix)

**No license information**

- Why: Users can't legally use your code
- Fix: Add a License section with MIT/Apache-2.0/etc.

**No usage example**

- Why: Users can't evaluate if your API fits their needs
- Fix: Add minimal, runnable code example

### Important (Should Fix)

**One-liner is 180 characters**

- Why: Should be ≤120 for scannability
- Fix: Shorten to "Fast URL parsing for Node.js"

**API section before Usage**

- Why: Users need to see it working before details
- Fix: Move Usage above API

### Suggested (Nice to Fix)

**12 badges at the top**

- Why: Visual clutter
- Fix: Keep 3-4 (version, CI, license)

### Items to Remove

- [ ] "The most amazing library" → Marketing speak
- [ ] Philosophy section → Move to CONTRIBUTING.md
- [ ] Redundant CI badges (keep one)

### Missing Elements

- [ ] Contributing guidelines
- [ ] Link to changelog
```

## Red Flags We Catch

- "The best/ultimate/amazing" → Marketing speak
- No code examples → Can't evaluate
- License missing/buried → Legal risk
- Full API in README → Should be in docs
- Usage section just links elsewhere → Not helpful

## Files

| File           | Purpose               |
| -------------- | --------------------- |
| `skill.md`     | Core skill definition |
| `PROCEDURE.md` | Detailed checklist    |
| `README.md`    | This file             |

## After Evaluation

The skill offers to:

- Fix specific problems
- Rewrite sections
- Generate new README
- Create missing files (CONTRIBUTING.md, etc.)

## License

MIT
