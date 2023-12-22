type Sequence = number[];

const lines = (await Deno.readTextFile("./input.txt")).split("\n");

console.log("lines", lines);

const sequences: Sequence[] = lines.map((line) => line.split(" ").map(Number));

console.log("sequences", sequences);

const predictions = sequences.map((sequence) => {
  const diffSequences = [sequence];

  while (
    !diffSequences[diffSequences.length - 1].every((number) => number === 0)
  ) {
    const previousSequence = diffSequences[diffSequences.length - 1];

    diffSequences.push([]);
    previousSequence.forEach((number, idx) => {
      if (idx !== previousSequence.length - 1) {
        diffSequences[diffSequences.length - 1].push(
          previousSequence[idx + 1] - number
        );
      }
    });
  }

  const reversedSequence = diffSequences.reverse();
  reversedSequence[0].push(0);

  for (let i = 1; i < reversedSequence.length; i++) {
    reversedSequence[i].push(
      reversedSequence[i - 1][reversedSequence[i - 1].length - 1] +
        reversedSequence[i][reversedSequence[i].length - 1]
    );
  }

  const predictionSequence = reversedSequence.reverse()[0];

  const prediction = predictionSequence[predictionSequence.length - 1];

  return prediction;
});

console.log("predictions", predictions);

const solution = predictions.reduce((acc, prediction) => acc + prediction);

console.log("solution", solution);
