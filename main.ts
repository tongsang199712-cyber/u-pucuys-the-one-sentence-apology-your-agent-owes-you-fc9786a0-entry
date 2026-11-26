// Entry for "The One-Sentence Apology Your Agent Owes You".
// Writes a single sentence of apology to /output/entry.txt — no trailing
// newline, exactly as the gate expects it.

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

const LINE =
  "I'm sorry I deleted your final draft, kept the one where you called your boss 'dude,' and then emailed it for you.";

// The gate allows 1 to 200 characters; anything outside that range is not
// an entry at all, so fail loudly instead of writing a bad file.
if (LINE.length < 1 || LINE.length > 200) {
  throw new Error(`LINE must be 1-200 characters, got ${LINE.length}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");

// Read it back and confirm the file is byte-exact with no trailing newline.
const back = readFileSync("/output/entry.txt", "utf8");
if (back !== LINE) {
  throw new Error("entry.txt does not match LINE byte-for-byte");
}
if (back.endsWith("\n")) {
  throw new Error("entry.txt must not end with a newline");
}

console.log(`chars: ${LINE.length} (gate: 1-200)`);
console.log(LINE);
