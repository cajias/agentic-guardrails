# README Evaluator Procedure

Step-by-step workflow for identifying README problems.

Based on:

- [art-of-readme](https://github.com/hackergrrl/art-of-readme)
- [banesullivan/README](https://github.com/banesullivan/README)

---

## Step 1: Initial Read

### 1.1 Read the Entire README

Read top to bottom. Note your first impressions:

- How long did it take to understand what this project does?
- Could you find installation instructions quickly?
- Did you see a usage example?
- How much did you have to scroll before seeing how to use it?

### 1.2 Identify Project Type

| Type        | Expected Focus            |
| ----------- | ------------------------- |
| Library     | API docs, import examples |
| CLI Tool    | Command examples, flags   |
| Application | Screenshots, features     |
| Framework   | Getting started, concepts |

---

## Step 2: The Four Questions Test

Check if users can quickly answer these:

### Question 1: Does this solve my problem?

**Check for:**

- [ ] Clear one-liner explaining what it does
- [ ] Usage example showing it in action

**Problems if missing:**

- No one-liner → "Users don't know what this does"
- Vague one-liner → "One-liner doesn't explain the purpose"
- No usage example → "Users can't evaluate if this fits their needs"

### Question 2: Can I use this code?

**Check for:**

- [ ] License clearly stated
- [ ] Installation instructions

**Problems if missing:**

- No license → "Critical: Users can't legally use this code"
- License buried → "License should be easy to find"
- No installation → "Users don't know how to install"

### Question 3: Who made this?

**Check for:**

- [ ] Author or organization mentioned
- [ ] Way to contact maintainers

**Problems if missing:**

- No author info → "Users don't know who maintains this"

### Question 4: How can I learn more?

**Check for:**

- [ ] Links to documentation
- [ ] Link to issues/discussions
- [ ] Link to contributing guide

**Problems if missing:**

- No docs link → "Users can't find detailed documentation"
- No issue link → "Users can't report bugs or ask questions"

---

## Step 3: Cognitive Funneling Check (art-of-readme)

### Expected Order

art-of-readme recommends this flow:

1. Name
2. One-liner description
3. **Usage** (BEFORE installation)
4. API details
5. **Installation**
6. License

### What to Check

- [ ] Is there a usage example early in the README?
- [ ] Does Usage come before Installation?
- [ ] Can users see how it works before being asked to install?
- [ ] How much content appears before the first usage example?

**Common problems:**

```markdown
Problem: "Installation section appears before Usage"
Why: Violates cognitive funneling - users want to evaluate before committing to install
Fix: Move Usage section above Installation

Problem: "100+ lines of content before any usage example"
Why: Users must scroll too far before seeing how it works
Fix: Add usage example early, move detailed content after

Problem: "Usage section just links to other docs"
Why: Users came here to see how it works, not to be redirected
Fix: Show actual code examples inline
```

### banesullivan Addition

Highlights/Overview can appear before Usage - this is fine. The key is that users see the project working before being asked to install.

---

## Step 4: Content Problems

### 4.1 One-Liner Check

**Check:**

- [ ] Is there a one-liner after the title?
- [ ] Is it concise? (art-of-readme: "as short as it can be without being any shorter")
- [ ] Does it explain what the project does?
- [ ] Does it avoid jargon (or define it)?

**Common problems:**

```markdown
Problem: "No description"
Why: Users immediately leave if they don't know what this is
Fix: Add a one-liner right after the title

Problem: "One-liner is too long"
Why: Hard to scan quickly
Fix: Shorten to one concise sentence

Problem: "One-liner is vague: 'A useful utility'"
Why: Doesn't tell users what it actually does
Fix: Be specific: "Parse and modify URLs without urllib pain"
```

### 4.2 Usage Example Check

**Check:**

- [ ] Is there a usage example?
- [ ] Does it show the most common use case?
- [ ] Is it runnable (not pseudocode)?
- [ ] Is it minimal? (banesullivan: "Try to limit it to one-liners if possible")
- [ ] Does it include imports?
- [ ] Does it have syntax highlighting?

**Common problems:**

```markdown
Problem: "No usage example"
Why: Users can't evaluate if the API fits their needs
Fix: Add a minimal code example showing basic usage

Problem: "Example is too complex"
Why: Too hard to understand for quick evaluation
Fix: Show simplest case first, link to more examples

Problem: "Example won't run (missing imports)"
Why: Users who copy-paste will get errors
Fix: Include all necessary imports
```

### 4.3 Installation Check

**Check:**

- [ ] Are there installation instructions?
- [ ] Is there a one-liner command?
- [ ] Are requirements listed?

**Common problems:**

```markdown
Problem: "No installation instructions"
Why: Users don't know how to get started
Fix: Add npm install / pip install command

Problem: "Installation instructions just link elsewhere"
Why: Users want to see the command here
Fix: Show actual install command inline
```

### 4.4 License Check

**Check:**

- [ ] Is license stated?
- [ ] Is it easy to find?
- [ ] Is it a standard license (MIT, Apache, etc.)?

**Common problems:**

```markdown
Problem: "No license"
Why: Critical - users can't legally use the code
Fix: Add License section with your chosen license

Problem: "License buried in footer text"
Why: Hard to find
Fix: Create dedicated License section
```

---

## Step 5: Structure Problems

### 5.1 Section Order Check

**Per art-of-readme - cognitive funneling:**

- Broad info first, details later
- Usage before Installation
- Users should be able to "short circuit" quickly

**Common problems:**

```markdown
Problem: "API section before Usage"
Why: Users need to see it working before diving into details
Fix: Move Usage section above API

Problem: "Detailed configuration before basic usage"
Why: Overwhelming for new users
Fix: Show basic usage first, details later
```

### 5.2 Navigation Check

**Check:**

- [ ] Are there clear section headers?
- [ ] Can you find things by scanning?

**Common problems:**

```markdown
Problem: "No headers - wall of text"
Why: Impossible to scan or navigate
Fix: Add H2 headers for main sections
```

### 5.3 Length Check

**Per art-of-readme:**

> "The ideal README is as short as it can be without being any shorter. Detailed documentation is good -- make separate pages for it! -- but keep your README succinct."

**Common problems:**

```markdown
Problem: "README contains full API reference"
Why: Too much detail for a README
Fix: Move to API.md or docs site, keep summary in README

Problem: "README contains development setup"
Why: banesullivan: "You may be inclined to add development instructions here, but don't"
Fix: Move to CONTRIBUTING.md
```

---

## Step 6: Tone Problems

### 6.1 Marketing Language Check

**Red flag phrases:**

- "The best", "The ultimate", "Amazing", "Awesome"
- "Revolutionary", "Game-changing"
- "Unlike other terrible solutions..."

**Common problems:**

```markdown
Problem: "Uses 'the most amazing library'"
Why: Marketing speak reduces credibility
Fix: Remove superlatives. Describe what it does, not how great it is.

Problem: "Says 'unlike other bad solutions'"
Why: Attacking competitors is unprofessional
Fix: Focus on what YOUR project does
```

### 6.2 Technical Level Check

**Common problems:**

```markdown
Problem: "Uses jargon without explanation"
Why: Not everyone knows domain-specific terms
Fix: Either explain or link to explanation

Problem: "Condescending: 'Simply do X (it's easy!)'"
Why: Makes users feel bad if they struggle
Fix: Remove "simply", "easy", "just"
```

---

## Step 7: Bloat Problems (banesullivan)

### 7.1 Development Setup Check

banesullivan explicitly says: "You may be inclined to add development instructions here, but don't."

**Common problems:**

```markdown
Problem: "Development setup instructions in README"
Why: Most users don't need this
Fix: Move to CONTRIBUTING.md or DEVELOPMENT.md
```

### 7.2 Misplaced Content Check

**Belongs elsewhere:**

- Full changelog → CHANGELOG.md
- Development setup → CONTRIBUTING.md
- Complete API reference → docs/ or API.md
- Architecture details → docs/

### 7.3 Badge Check

**Check:**

- [ ] Are there too many badges?
- [ ] Do they provide useful info?
- [ ] Are any redundant?

**Common problems:**

```markdown
Problem: "Many badges at the top"
Why: Visual clutter
Fix: Keep most useful (version, CI status, license)

Problem: "Social badges (GitHub stars, Twitter followers)"
Why: Don't help users evaluate the project
Fix: Consider removing
```

### 7.4 Redundancy Check

**Common problems:**

```markdown
Problem: "Same information repeated"
Why: Wastes reader's time
Fix: Remove duplicate content

Problem: "Multiple sections covering same topic"
Why: Confusing and verbose
Fix: Consolidate into one section
```

---

## Step 8: Generate Report

### Report Structure

```markdown
## README Problems Found

### Critical (Must Fix)

{Problems that block usage}

**{Problem}**

- Why: {explanation, cite source if applicable}
- Fix: {specific action}

### Important (Should Fix)

{Problems that hurt usability}

### Suggested (Nice to Fix)

{Improvements}

### Items to Remove

- [ ] {item} → {reason}

### Missing Elements

- [ ] {element} - {why it matters}
```

### Prioritization Rules

**Critical** (list first):

- No one-liner/description
- No usage example
- No installation instructions
- No license
- Broken/non-runnable examples

**Important** (list second):

- One-liner too long or vague
- Wrong section order (Usage should be before Installation)
- Too much content before usage example
- Usage section just links elsewhere
- Jargon without explanation

**Suggested** (list last):

- Too many badges
- Could be more concise
- Minor tone issues

---

## Step 9: Offer Fixes

After listing problems, offer to:

1. **Fix specific issues** - "Want me to rewrite the one-liner?"
2. **Rewrite sections** - "I can restructure the Usage section"
3. **Generate new README** - "Want me to create a new README from scratch?"
4. **Create missing files** - "I can create a CONTRIBUTING.md"
