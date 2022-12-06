/**
 * Using js for now cz cant bother with types atm
 * TODO: Use ts at some point
 */

const values = Deno.readTextFileSync('./inputs/day_5.txt').split(
	'\r\n',
);

const stacks = {};
// let stacks = {};
const procedures = [];

values.forEach((line) => {
	const content = line.replace(/\s/g, '');

	const isUnnecessary = !content || !isNaN(parseInt(content));

	if (isUnnecessary) {
		return;
	}

	const isProcedure = line.indexOf('move') > -1;

	if (isProcedure) {
		const [move, quantity, from, source, to, target] = line.split(
			' ',
		);

		procedures.push({
			[move]: parseInt(quantity),
			[from]: parseInt(source),
			[to]: parseInt(target),
		});
	} else {
		for (let index = 0; index < line.length; index += 4) {
			const stack = (index / 4) + 1;
			const crate = line.substring(index, index + 4).match(/\w/g);

			stacks[stack] = (!stacks[stack] ? '' : stacks[stack]) +
				(crate ? crate : '');
		}
	}
});

// stacks = { ...stacks };

procedures.forEach((procedure) => {
	stacks[procedure.to] =
		stacks[procedure.from].substring(0, procedure.move) +
		stacks[procedure.to];
	stacks[procedure.from] = stacks[procedure.from].substring(
		procedure.move,
	);
});

const answer = Object.values(stacks).map((stack) => stack[0]).join('');

// Output the answers

console.log(answer);
