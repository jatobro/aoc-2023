const input = await Deno.readTextFile("./input.txt");

const lines = input.split("\n");

console.log("lines", lines);

const RED_MAX = 12;
const GREEN_MAX = 13;
const BLUE_MAX = 14;

const games = lines.map((line) =>
  line
    .split(":")[1]
    .split(";")
    .map((set) =>
      set
        .trim()
        .split(",")
        .map((reveal) => reveal.trim().split(" "))
    )
);

console.log("games", games);

let sum = 0;

games.forEach((game) => {
  let isPossible = true;

  game.forEach((set) => {
    let r = 0,
      g = 0,
      b = 0;

    set.forEach((reveal) => {
      const amount = Number(reveal[0]);
      const color = reveal[1];

      if (color === "red") {
        r += amount;
      } else if (color === "green") {
        g += amount;
      } else {
        b += amount;
      }
    });

    if (r > RED_MAX || g > GREEN_MAX || b > BLUE_MAX) {
      isPossible = false;
    }
  });

  sum += isPossible ? games.indexOf(game) + 1 : 0;
});

console.log("sum", sum);
