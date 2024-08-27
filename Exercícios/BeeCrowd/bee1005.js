const fs = require('fs');
const input = fs.readFileSync('input.txt', 'utf-8');

var lines = input.split('\n');

let A = Number(lines[0]);
let B = Number(lines[1]);

let media = (A * 3.5 + B * 7.5) / 11;

console.log("MEDIA =", media.toFixed(5)); 