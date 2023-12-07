const input = await Deno.readTextFile("./input.txt");

const lines = input.split("\n");

console.log("lines", lines);

const timesAndDistances = lines.map((line) =>
  line
    .split(":")[1]
    .split(" ")
    .map((element) => Number(element))
    .filter((number) => number != 0)
);

const times = timesAndDistances[0];

console.log("times", times);

const distances = timesAndDistances[1];

console.log("distances", distances);

let result = 1;

times.forEach((time) => {
  const recordDistance = distances[times.indexOf(time)];

  let recordCount = 0;

  for (let t = 1; t <= time; t++) {
    const distance = t * (time - t);

    if (distance > recordDistance) {
      recordCount += 1;
    }
  }

  result *= recordCount;
});

console.log("result", result);
