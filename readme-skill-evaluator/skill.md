# README Evaluator

AI-powered skill for identifying README problems and explaining how to fix them.

## Trigger

This skill activates when the user asks to:

- "Evaluate this README"
- "Review my README"
- "What's wrong with this README?"
- "How can I improve this README?"
- "Critique this documentation"

## Core Philosophy

> "Your job isn't to sell people on your work. It's to let them evaluate what your creation does as objectively as
> possible."

A great README enables users to quickly determine if a project meets their needs. The evaluator identifies what's
preventing that.

## Guidelines Sources

Based on:

- [art-of-readme](https://github.com/hackergrrl/art-of-readme) - Cognitive funneling, section order
- [banesullivan/README](https://github.com/banesullivan/README) - Highlights, usage-first approach

## What We Check

### The Four Questions Test

Every README must help users quickly answer:

1. **Does this solve my problem?** → Name + One-liner + Usage example
2. **Can I use this code?** → License
3. **Who made this?** → Author/Maintainers
4. **How can I learn more?** → Links to docs, issues

### Cognitive Funneling (art-of-readme)

Information should flow from broad to specific:

1. Name
2. One-liner description
3. Usage example (BEFORE installation)
4. API details
5. Installation
6. License

Users should be able to quickly evaluate and "short circuit" if the project doesn't fit their needs.

### Content Problems

- Missing or weak one-liner
- No usage examples
- Examples that won't run
- Missing installation instructions
- No license information
- Outdated API references

### Structure Problems

- Wrong section order (installation or API before usage)
- No headers or navigation
- Important info buried at bottom
- Wall of text (no formatting)
- Too much content before first usage example

### Tone Problems

- Marketing language ("best", "amazing", "ultimate")
- Condescending explanations
- Assuming too much knowledge
- Attacking competitors
- No personality (robotic)

### Bloat Problems (banesullivan)

- Too many badges
- Full changelog in README
- Development setup (belongs in CONTRIBUTING.md or separate doc)
- Complete API reference (belongs in docs)
- Redundant information
- Outdated content

banesullivan: "You may be inclined to add development instructions here, but don't."

## Output Format

```markdown
## README Problems Found

### Critical (Must Fix)

These prevent users from evaluating or using your project.

**No usage example**

- Why: Users can't evaluate if your API fits their needs (art-of-readme: cognitive funneling)
- Fix: Add a minimal, runnable code example showing the most common use case

**No license information**

- Why: Users can't legally use your code without knowing the license
- Fix: Add a License section with your chosen license (MIT, Apache-2.0, etc.)

### Important (Should Fix)

These make your README harder to use.

**Installation section before usage example**

- Why: Violates cognitive funneling - users need to see it working before committing to install
- Fix: Move Usage section above Installation

**One-liner is too long/vague**

- Why: Should be concise enough for quick scanning
- Fix: Shorten to capture what the project does in one sentence

**Too much content before usage example**

- Why: Users must scroll through [X lines] before seeing how it works
- Fix: Move detailed content after Usage section

### Suggested (Nice to Fix)

These would improve but aren't blocking.

**Too many badges**

- Why: Visual clutter, most don't help typical users
- Fix: Keep meaningful ones (version, CI, license)

### Items to Remove

- [ ] "The most amazing library ever" → Marketing speak
- [ ] Development setup → Move to CONTRIBUTING.md
- [ ] Full API reference → Move to separate docs
- [ ] Redundant paragraphs

### Missing Elements

- [ ] Runnable usage example
- [ ] License section
- [ ] Contributing guidelines
```

## Problem Categories

### Critical Problems

Block users from evaluating or using the project:

- No description/one-liner
- No usage example
- No installation instructions
- No license

### Important Problems

Make the README significantly harder to use:

- One-liner too long or vague
- Examples that won't run
- Wrong section order (Usage should come before Installation)
- Too much content before usage example
- Jargon without explanation
- Broken links

### Suggested Improvements

Would improve quality but not blocking:

- Too many badges
- Could be more concise
- Missing acknowledgements

## Red Flags

### Instant Red Flags

- "The best/ultimate/amazing" → Marketing speak
- No code examples → Can't evaluate
- License buried or missing → Legal risk
- All badges, no content → Style over substance
- Usage section just links to other docs → Not helpful

### Warning Signs

- One-liner that doesn't explain what project does
- Usage example that's too complex
- More than ~10 badges
- "Unlike other solutions..." → Competitive attacks
- Full API in README → Should link to docs
- Development setup in README → Should be in CONTRIBUTING.md

## Key Principles (from sources)

### art-of-readme

- "The ideal README is as short as it can be without being any shorter"
- "Detailed documentation is good -- make separate pages for it! -- but keep your README succinct"
- Cognitive funneling: broad info first, details later
- Usage before Installation

### banesullivan

- "Keep it concise; ain't nobody got time for your manifesto"
- "You may be inclined to add development instructions here, but don't"
- "Try to limit [usage examples] to one-liners if possible"
- Highlights/Overview can come early (before Usage)

## Workflow

1. **Read** the entire README
2. **Identify** project type (library, CLI, app)
3. **Check** the four questions test
4. **Check** cognitive funneling (is Usage before Installation?)
5. **Find** content, structure, tone, and bloat problems
6. **Categorize** by severity (critical, important, suggested)
7. **Explain** why each is a problem (cite guideline source)
8. **Provide** specific fixes
9. **List** items to remove and missing elements

## After Evaluation

Offer to:

- Fix specific problems identified
- Rewrite problematic sections
- Generate a new README from scratch
- Create missing files (CONTRIBUTING.md, etc.)

## See Also

- `PROCEDURE.md` - Detailed evaluation checklist
- `README.md` - Installation and usage
