const input = await Deno.readTextFile("./input.txt");

const lines = input.split("\n");

console.log("lines", lines);

const values = lines.map((line) => {
  const replacements = [
    { from: "one", to: "1" },
    { from: "two", to: "2" },
    { from: "three", to: "3" },
    { from: "four", to: "4" },
    { from: "five", to: "5" },
    { from: "six", to: "6" },
    { from: "seven", to: "7" },
    { from: "eight", to: "8" },
    { from: "nine", to: "9" },
  ];

  replacements.sort((a, b) => line.indexOf(a.from) - line.indexOf(b.from));

  let noWordDigits = line;

  replacements.forEach((replacement) => {
    noWordDigits = noWordDigits.replace(
      new RegExp(replacement.from, "g"),
      replacement.to
    );
  });

  const digits = noWordDigits.replace(/\D/g, "");

  return Number(digits[0] + digits[digits.length - 1]);
});

console.log("values", values);

let sum = 0;

values.forEach((value) => (sum += value));

console.log("sum", sum);
