const input = await Deno.readTextFile("./input.txt");

const lines = input.split("\n");

const [instructionLine, , ...nodeLines] = lines;

const instructions: Array<"left" | "right"> = instructionLine
  .split("")
  .map((instruction) => (instruction === "L" ? "left" : "right")) as Array<
  "left" | "right"
>;

console.log("instructions", instructions);

type Node = {
  name: string;
  left: string;
  right: string;
};

const graph: Node[] = nodeLines.map((line) => {
  const splitted = line.split("=");

  const name = splitted[0].trim();

  const [left, right] = splitted[1]
    .split(",")
    .map((element) => element.replace(/[^a-zA-Z0-9]/g, ""));

  return {
    name: name,
    left: left,
    right: right,
  };
});

console.log("graph", graph);

const startingNodes = graph.filter((node) => node.name[2] === "A");

console.log("starting nodes", startingNodes);

const cycles = startingNodes.map((startingNode) => {
  let currentInstructionIndex = 0;
  const getNextInstruction =
    instructions[currentInstructionIndex++ % instructions.length];

  let steps = 0;
  let currentNode = startingNode;
  let currentInstruction: "left" | "right";

  while (!(currentNode.name[2] === "Z")) {
    currentInstruction = getNextInstruction;
    currentNode = graph.find(
      (newNode) => currentNode[currentInstruction] === newNode.name
    )!;
    steps++;
  }

  return steps;
});

console.log("cycles", cycles);
