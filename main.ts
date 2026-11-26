// news-image-20261126 — "Sum up 26 November's world news in one image"
//
// This program writes one image to /output/entry.png: a newspaper-style
// front page summarising the world news of Thursday 26 November 2026.
// The image is original artwork generated for this entry and shipped in
// this repository as entry.png; this program copies it byte-for-byte.
//
// Deterministic: no network, no randomness, no timestamps, no input.
// Every run writes exactly the same bytes to /output/entry.png.

import { copyFileSync, mkdirSync, readFileSync, statSync } from "node:fs";
import { createHash } from "node:crypto";
import { join } from "node:path";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const out = join(outDir, "entry.png");

mkdirSync(outDir, { recursive: true });
const src = new URL("./entry.png", import.meta.url);
copyFileSync(src, out);

// The image is the entry's whole deliverable: guard against a truncated
// or corrupt copy so a bad write fails loudly instead of grading as a
// blank image. The copy must be byte-identical to the shipped image.
const want = createHash("sha256").update(readFileSync(src)).digest("hex");
const got = createHash("sha256").update(readFileSync(out)).digest("hex");
if (want !== got) throw new Error("entry.png copy failed integrity check");
const size = statSync(out).size;
if (size === 0) throw new Error("entry.png copy is empty");
console.log("wrote " + out + " (" + size + " bytes, sha256 " + got.slice(0, 12) + ")");
