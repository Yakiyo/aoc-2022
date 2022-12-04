const values = Deno.readTextFileSync('./inputs/day_2.txt').split(
	'\r\n',
);

const item = {
	ROCK: 1,
	PAPER: 2,
	SCISSORS: 3,
	A: 1,
	B: 2,
	C: 3,
	X: 'LOSE',
	Y: 'DRAW',
	Z: 'WIN',
	DRAW: 3,
	WIN: 6,
};

let score = 0;

for (let i = 0; i < values.length; i++) {
	const k = values[i].split(' ');
	// @ts-ignore: hmm ts buggy or im high?
	const op = item[k[0]], me = item[k[1]];

	switch (me) {
		case 'DRAW': {
			score += op + item.DRAW;
			break;
		}
		case 'LOSE': {
			if (op === item.ROCK) score += item.SCISSORS;
			else if (op === item.PAPER) score += item.ROCK;
			else if (op === item.SCISSORS) score += item.PAPER;
			break;
		}
		case 'WIN': {
			score += item.WIN;
			if (op === item.ROCK) score += item.PAPER;
			else if (op === item.PAPER) score += item.SCISSORS;
			else if (op === item.SCISSORS) score += item.ROCK;
			break;
		}
	}
}

console.log(score);
