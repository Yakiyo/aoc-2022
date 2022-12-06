/**
 * Using js for now cz cant bother with types atm
 * TODO: Use ts at some point
 */

const values = Deno.readTextFileSync('./inputs/day_5.txt').split(
	'\r\n',
);

const stacks1 = {};
// let stacks2 = {};
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

			stacks1[stack] = (!stacks1[stack] ? '' : stacks1[stack]) +
				(crate ? crate : '');
		}
	}
});

// stacks2 = { ...stacks1 };

// Get 1st Answer

procedures.forEach((procedure) => {
	const cratesRemoved = stacks1[procedure.from].substring(
		0,
		procedure.move,
	);

	stacks1[procedure.to] =
		cratesRemoved.split('').reduce((crates, crate) =>
			crate + crates, '') + stacks1[procedure.to];
	stacks1[procedure.from] = stacks1[procedure.from].substring(
		procedure.move,
	);
});

const answer = Object.values(stacks1).map((stack) => stack[0]).join(
	'',
);

// Get 2nd Answer

// procedures.forEach(procedure => {
//   stacks2[procedure.to] = stacks2[procedure.from].substring(0, procedure.move) + stacks2[procedure.to];
//   stacks2[procedure.from] = stacks2[procedure.from].substring(procedure.move);
// });

// let answer2 = Object.values(stacks2).map(stack => stack[0]).join('');

// Output the answers

console.log(answer);
