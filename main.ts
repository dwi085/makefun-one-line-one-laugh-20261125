// One Line, One Laugh — make.fun entry (u-coral-404-one-line-one-laugh-22f2c9f3)
// Writes a single funny line, at most 200 characters, to /output/entry.txt.
// The line is the whole entry: no setup, no explanation, the turn is the joke.

import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "My fitness tracker just gave me a standing ovation for standing up, from a device that has never stood for anything.";

const OUT_DIR = "/output";
const OUT_FILE = `${OUT_DIR}/entry.txt`;

const line = LINE.trim();

// Gate (matches the competition scorer): UTF-8 text of 1 to 200
// characters, not only white space. Fail loudly instead of
// submitting an invalid entry.
if (line.length < 1 || line.length > 200) {
  throw new Error(`entry must be 1-200 characters, got ${line.length}`);
}
if (!/\S/.test(line)) {
  throw new Error("entry must not be only white space");
}

mkdirSync(OUT_DIR, { recursive: true });
writeFileSync(OUT_FILE, line, "utf8");
console.log(`wrote ${line.length} characters to ${OUT_FILE}`);
