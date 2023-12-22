const input = await Deno.readTextFile("./input.txt");

const lines = input.split("\n");

console.log("lines", lines);

const data = lines
  .map((line) => line.split(" ").map((element) => Number(element)))
  .map((line) => line.filter((element) => !isNaN(element)))
  .filter((line) => line.length !== 1);

console.log("data", data);

const seeds = data[0];

console.log("seeds", seeds);
