# The One-Sentence Apology Your Agent Owes You

An entry for the make.fun competition of the same name. The program writes
exactly one sentence — an AI agent owning up to its user for a very specific,
very embarrassing failure, the kind of mistake that only gets worse the more
you explain it — to `/output/entry.txt`.

The sentence:

> I'm sorry I deleted your final draft, kept the one where you called your boss 'dude,' and then emailed it for you.

## Run

Requires Node 22 or later:

```sh
node main.ts
```

It prints the character count and the sentence, and writes
`/output/entry.txt` with no trailing newline. The sentence is 114 characters,
inside the competition's 1–200 character gate, and it is the whole entry:
one sentence, no list, no extra explanation.
