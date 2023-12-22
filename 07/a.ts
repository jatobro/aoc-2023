const input = await Deno.readTextFile("./input.txt");

const lines = input.split("\n");

console.log("lines", lines);

const plays = lines.map((line) => {
  const playArray = line.split(" ");

  return {
    hand: playArray[0],
    bid: Number(playArray[1]),
  };
});

console.log("plays", plays);

const getType = (hand: string) => {
  const strengthCounts: { [key: string]: number } = {};

  for (const card of hand)
    strengthCounts[card] = (strengthCounts[card] || 0) + 1;

  const counts = Object.values(strengthCounts).sort((a, b) => b - a);

  if (counts.includes(5)) {
    return 1;
  } else if (counts.includes(4)) {
    return 2;
  } else if (counts.includes(3)) {
    if (counts.includes(2)) {
      return 3;
    }
    return 4;
  } else if (counts.includes(2)) {
    if (counts.length === 3) {
      return 5;
    }

    return 6;
  }

  return 7;
};

const HAND_SIZE = 5;

plays.sort((a, b) => {
  const hand1 = a.hand;
  const hand2 = b.hand;

  const type1 = getType(hand1);
  const type2 = getType(hand2);

  if (type1 !== type2) {
    return type1 - type2;
  }

  const strengths = [
    "A",
    "K",
    "Q",
    "J",
    "T",
    "9",
    "8",
    "7",
    "6",
    "5",
    "4",
    "3",
    "2",
  ];

  for (let i = 0; i < HAND_SIZE; i++) {
    for (const strength of strengths) {
      if (hand1[i] === strength && hand2[i] === strength) {
        continue;
      }

      if (hand1[i] === strength) {
        return -1;
      }

      if (hand2[i] === strength) {
        return 1;
      }
    }
  }

  return 0;
});

console.log("sorted plays", plays);

let result = 0;

plays.forEach(
  (play) => (result += (plays.length - plays.indexOf(play)) * play.bid)
);

console.log("result", result);
