const input = await Deno.readTextFile("./input.txt");

const lines = input.split("\n");

console.log("lines", lines);

const cards = lines.map((line) =>
  line
    .split(":")[1]
    .split("|")
    .map((list) =>
      list
        .trim()
        .split(" ")
        .filter((element) => element !== "")
        .map((digit) => Number(digit))
    )
);

console.log("cards", cards);

let result = 0;

cards.forEach((card) => {
  const winningNumbers = card[0];
  const playerNumbers = card[1];

  let winCount = 0;

  winningNumbers.forEach((winningNumber) => {
    if (playerNumbers.indexOf(winningNumber) !== -1) {
      winCount += 1;
    }
  });

  result += winCount > 0 ? 2 ** (winCount - 1) : 0;
});

console.log("result", result);
