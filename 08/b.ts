const input = await Deno.readTextFile("./input.txt");

const lines = input.split("\n");

console.log("lines", lines);

type Node = {
  name: string;
  L: string;
  R: string;
};

const [instructionLine, , ...nodeLines] = lines;

const instructions = instructionLine.split("") as Array<"L" | "R">;

console.log("instructions", instructions);

const graph: Node[] = nodeLines.map((line) => {
  const splitted = line.split("=");

  const name = splitted[0].trim();

  const [left, right] = splitted[1]
    .split(",")
    .map((element) => element.replace(/[^a-zA-Z0-9]/g, ""));

  return {
    name: name,
    L: left,
    R: right,
  };
});

console.log("graph", graph);

const startingNodes = graph.filter((node) => node.name[2] === "A");

console.log("starting nodes", startingNodes);

const cycles = startingNodes.map((startingNode) => {
  let instructionIndex = 0;
  const getNextInstruction = () =>
    instructions[instructionIndex++ % instructions.length];

  let steps = 0;
  let currentNode = startingNode;
  let currentInstruction: "L" | "R";

  while (!(currentNode.name[2] === "Z")) {
    currentInstruction = getNextInstruction();
    currentNode = graph.find(
      (node) => startingNode[currentInstruction] === node.name
    )!;
    steps++;
  }
});

console.log("cycles", cycles);
