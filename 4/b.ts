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

const getPoints = (card: number[][]) => {
  let matches = 0;

  card[0].forEach((number) => {
    if (card[1].indexOf(number) !== -1) {
      matches += 1;
    }
  });

  let points = 1;

  for (
    let i = cards.indexOf(card) + 1;
    i < cards.indexOf(card) + 1 + matches;
    i++
  ) {
    points += getPoints(cards[i]);
  }

  return points;
};

cards.forEach((card) => (result += getPoints(card)));

console.log("result", result);
