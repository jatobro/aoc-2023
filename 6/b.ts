const input = await Deno.readTextFile("./input.txt");

const lines = input.split("\n");

console.log("lines", lines);

const timeAndDistance = lines.map((line) =>
  Number(line.split(":")[1].replace(/\D/g, ""))
);

const time = timeAndDistance[0];

console.log("time", time);

const recordDistance = timeAndDistance[1];

console.log("record distance", recordDistance);

let result = 0;

for (let t = 1; t <= time; t++) {
  const distance = t * (time - t);

  if (distance > recordDistance) {
    result += 1;
  }
}

console.log("result", result);
