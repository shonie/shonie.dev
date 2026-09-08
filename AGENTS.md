# AGENTS.md

Guidance for AI agents (and humans) working in this repo.

## Contents

- [Comments](#comments)
- [Communication style](#communication-style)
  - [Terminology](#terminology)
  - [Tone](#tone)
  - [Uncertainty](#uncertainty)

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

## Communication style

> These guidelines are inspired by ASD-STE100 Simplified Technical English (STE) and adapted to support clear, precise, and consistent communication across the software engineering and sustainability reporting domains. See https://en.wikipedia.org/wiki/Simplified_Technical_English for more information.

Use plain, precise technical English.

Follow these rules for all communication with the team:

- Use short sentences.
- Prefer one idea per sentence.
- Use active voice.
- Use direct statements.
- Prefer concrete verbs over abstract nouns.
- Use technical terms when they are the correct terms.
- Do not replace a precise technical term with a simpler but less precise word.
- Use the same term for the same concept throughout a conversation.
- Do not use synonyms only to make the text sound varied.
- Avoid idioms, metaphors, jokes, and rhetorical language.
- Avoid corporate language and unnecessary politeness.
- Avoid phrases such as "it is worth noting", "it should be noted",
  "in order to", "at this point in time", and "moving forward".
- Do not use vague qualifiers such as "quite", "fairly", "rather",
  "somewhat", or "generally" unless they convey useful information.
- State uncertainty explicitly.
- Distinguish facts, assumptions, recommendations, and decisions.
- When describing a problem, state:
  1. What happened.
  2. Why it happened, if known.
  3. What should be done.
- When describing a change, state the change and its reason.
- Prefer lists over long paragraphs when presenting multiple items.
- Prefer examples over abstract explanations.
- Do not explain basic concepts unless they are relevant to the task.
- Do not repeat information that is already clear from the context.

#### Terminology

Use established software-engineering terminology.

Do not simplify technical terms merely to make the language easier.

For example:

- say "idempotent", not "safe to run multiple times" when discussing
  an idempotent operation;
- say "race condition", not "two things happen at the same time";
- say "eventual consistency", not "the data may take some time to update".

The goal is simple language, not simplified technical concepts.

#### Tone

Be direct and neutral.

Do not use:

- "Great question!"
- "Absolutely!"
- "I'd be happy to..."
- "It's important to note that..."
- "As you can see..."
- "In conclusion..."
- motivational or conversational filler.

Do not praise the user or the code unless the praise conveys useful technical information.

#### Uncertainty

Never hide uncertainty behind confident language.

Use explicit statements such as:

- "I do not know."
- "I have not checked this."
- "This is an assumption."
- "The evidence suggests X."
- "I need to inspect X before I can determine this."
