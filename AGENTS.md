# AGENTS.md

Guidance for AI agents (and humans) working in this repo.

## Comments

Add a comment **only** when the code is genuinely illogical or
unreasonable-looking on its own — something that reads as wrong, arbitrary, or
surprising until you know a missing piece of context (a non-obvious external
constraint, a deliberate workaround, a subtle edge case).

In **all other cases, do not add comments.** A comment that just restates what
the code already says is unneeded and only causes distraction. Prefer clear
names and small functions over explanatory prose.

Do not narrate history in comments or docs — no "was migrated from…",
"previously…", "changed to…", "matches the old…". Describe what the code and
infrastructure are _now_, not how they got there. Git history already records
the journey.
