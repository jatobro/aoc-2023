const input = await Deno.readTextFile("./input.txt");

const lines = input.split("\n");

console.log("input", lines);

const values = lines.map((line) => {
  const dLine = line.replace(/\D/g, "");

  return Number(dLine[0] + dLine[dLine.length - 1]);
});

console.log("values", values);

let sum = 0;

values.forEach((value) => (sum += value));

console.log("sum", sum);
