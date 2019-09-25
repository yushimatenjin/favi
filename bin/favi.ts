#!/usr/bin/env node
import * as fs from "fs";
import { createCanvas } from "canvas";

const CANVAS_SIZE: number = 32;
const OUTPUT: string = "./favicon.ico";

const canvas = createCanvas(CANVAS_SIZE, CANVAS_SIZE);
const ctx = canvas.getContext("2d");

ctx.fillStyle = "rgb(255, 255, 255)";
ctx.fillRect(0, 0, CANVAS_SIZE, CANVAS_SIZE);
ctx.fill();

ctx.fillStyle = "rgba(255,98,89,1);";
ctx.font = "40px sans-serif";
ctx.fillText("●", 5.0, CANVAS_SIZE - 4);
ctx.fill();

const out = fs.createWriteStream(OUTPUT);
const stream = canvas.createPNGStream();

stream.pipe(out);
out.on("finish", () => console.log("The favicon was created."));
