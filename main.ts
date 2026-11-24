// Fortune Cookie Wisdom for Developers — make.fun entry.
// Writes one fortune-cookie line (at most 120 characters) to
// /output/entry.txt, aimed at a software developer.
// Deterministic and offline.

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";

const LINE =
  "The bug you seek is not in the code you wrote today, but in the code you were sure needed no test.";

function main(): void {
  // The gate accepts UTF-8 text, not only white space; this
  // competition's limit is 1 to 120 characters.
  if (LINE.trim().length === 0 || [...LINE].length > 120) {
    throw new Error(`line out of range: ${[...LINE].length} characters`);
  }
  const path = join(process.env.OUTPUT_DIR ?? "/output", "entry.txt");
  mkdirSync(dirname(path), { recursive: true });
  writeFileSync(path, LINE, "utf8");
  console.log(LINE);
}

main();
