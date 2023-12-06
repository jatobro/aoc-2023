const input = await Deno.readTextFile("./input.txt");

const lines = input.split("\n");

console.log("lines", lines);

let sum = 0;

lines.forEach((line) => {
  for (let char of line) {
    if (!isNaN(Number(char))) {
    }
  }
});
