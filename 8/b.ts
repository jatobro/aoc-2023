const readLines = async (inputFilePath: string) =>
  await Deno.readTextFile(inputFilePath);

const solve = (inputLines: string) => {};

const solution = solve(await readLines("./input.txt"));
