import { writeFileSync, mkdirSync } from "node:fs";
import { join } from "node:path";

// One Line, No Deadline Met — the entry is one single sentence, one line,
// exactly 94 characters, landing its punch at the very end.
const LINE =
  "I missed the deadline because my calendar was still set to 2027, where I am technically early.";

// Gate guard: the entry must stay one line of 1–200 characters, no second
// line, no setup — fail loudly instead of writing an invalid entry.
if (LINE.length < 1 || LINE.length > 200 || LINE.includes("\n")) {
  throw new Error(`entry line violates the 1-200 char one-line gate (${LINE.length} chars)`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR || process.env.OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
