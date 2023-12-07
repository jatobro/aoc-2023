const input = await Deno.readTextFile("./input.txt");

const lines = input.split("\n");

console.log("lines", lines);

lines.forEach((line) => {
  for (let char of line) {
    if (char !== "." && isNaN(Number(char))) {
    }
  }
});
