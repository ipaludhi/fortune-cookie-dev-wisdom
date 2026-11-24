// Fortune Cookie Wisdom for Developers — entry program (Node 22, stdlib only).
// Writes one original fortune-cookie wisdom for developers to /output/entry.txt.
// The wisdom: you will one day inherit uncommented code written by a genius,
// and that genius was you, six months ago — so comment your code for the
// stranger who shares your name and your deadlines.
// Deterministic: no network, no randomness, no input — every run writes
// byte-identical output.
import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const WISDOM =
  'You will inherit code written by a genius who left no comments. That genius was you, six months ago.';

// Writes exactly the wisdom, no trailing newline: the gate counts characters
// (1-200), so the file is 100 characters / 100 bytes, byte-identical every run.
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(outDir, { recursive: true });
if (WISDOM.length < 1 || WISDOM.length > 200 || !WISDOM.trim()) {
  throw new Error(`wisdom must be 1-200 non-blank characters, got ${WISDOM.length}`);
}
writeFileSync(join(outDir, 'entry.txt'), WISDOM, 'utf8');
