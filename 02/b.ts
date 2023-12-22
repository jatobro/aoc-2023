const input = await Deno.readTextFile("./input.txt");

const lines = input.split("\n");

console.log("lines", lines);

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
  let r_min = 0,
    g_min = 0,
    b_min = 0;
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

    if (r > r_min) {
      r_min = r;
    }

    if (g > g_min) {
      g_min = g;
    }

    if (b > b_min) {
      b_min = b;
    }
  });

  sum += r_min * g_min * b_min;
});

console.log("sum of power", sum);
