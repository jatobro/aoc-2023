const input = await Deno.readTextFile("./input.txt");

const lines = input.split("\n");

console.log("lines", lines);

const values = lines.map((line) => {
  let newLine = line;

  let replacements = [
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

  replacements = replacements.filter((replacement) =>
    line.includes(replacement.from)
  );

  replacements.sort((a, b) => line.indexOf(a.from) - line.indexOf(b.from));

  if (lines.indexOf(line) < 5) {
    console.log(replacements);
  }

  if (replacements.length !== 0) {
    newLine = newLine.replace(
      new RegExp(replacements[0].from),
      replacements[0].to
    );
  }

  replacements.sort((a, b) => line.indexOf(b.from) - line.indexOf(a.from));

  if (lines.indexOf(line) < 5) {
    console.log(replacements);
  }

  if (replacements.length !== 0) {
    newLine = newLine.replace(
      new RegExp(replacements[0].from),
      replacements[0].to
    );
  }

  const digits = newLine.replace(/\D/g, "");

  return Number(digits[0] + digits[digits.length - 1]);
});

for (let i = 0; i < lines.length; i++) {
  console.log("LINE:", lines[i], "VALUE:", values[i]);
}

let sum = 0;

values.forEach((value) => (sum += value));

console.log("sum", sum);
