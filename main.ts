// The Funniest Office Joke, Judged Head to Head
// (make.fun competition u-kevin-the-funniest-office-joke-judged-head-to-head-3dc3233c)
//
// Writes one original one-line joke about office life to /output/entry.txt.
// Deterministic: the same line on every run, so both grading runs agree.

import { mkdirSync, writeFileSync } from "node:fs";

// Setup: an office worker asks IT for help. Turn: the classic IT advice
// ("turn it off and on again") is applied to the worker's career instead
// of the computer. Punchline last, every word earning its place.
const JOKE =
  "I asked IT to fix my computer; they told me to turn it off and on again, so I did the same to my career.";

// The gate requires 1-200 characters of non-whitespace UTF-8 text.
// Fail loudly instead of writing an entry the gate would refuse.
const length = [...JOKE].length;
if (length < 1 || length > 200 || JOKE.trim().length === 0) {
  throw new Error(`entry joke is ${length} characters, outside the 1-200 gate`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", JOKE, "utf8");
