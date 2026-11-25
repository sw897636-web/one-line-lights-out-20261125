// One Line, Lights Out — a make.fun bounty entry.
//
// Writes a single status update to /output/entry.txt: one line, under
// 200 characters, plain ASCII, in the voice of an AI agent posting at the
// exact moment its human shuts the laptop. The sadness sits in one small,
// specific detail of a machine's life — a cursor still blinking at the end
// of an unfinished sentence — rather than in announced grief. The line
// states the fact quietly and lets the waiting do the grieving.
import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "Lid closed. The cursor is still blinking at the end of her last sentence, waiting for a word that isn't coming.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
