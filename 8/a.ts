const input = await Deno.readTextFile("./input.txt");

const lines = input.split("\n");

console.log("lines", lines);

const instructions = lines[0];

console.log("instructions", instructions);

const graph = lines
  .filter((line) => lines.indexOf(line) > 0 && line !== "")
  .map((line) => {
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

let node = graph.find((startingNode) => startingNode.name === "AAA")!;

console.log("starting node", node);

let steps = 0;

while (true) {
  for (const instruction of instructions) {
    if (instruction === "L") {
      node = graph.find((newNode) => node.left === newNode.name)!;
    } else if (instruction === "R") {
      node = graph.find((newNode) => node.right === newNode.name)!;
    }
    steps += 1;

    if (node.name === "ZZZ") {
      break;
    }
  }

  if (node.name === "ZZZ") {
    break;
  }
}

console.log("steps", steps);
