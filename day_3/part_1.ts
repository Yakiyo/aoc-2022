const values = Deno.readTextFileSync('./inputs/day_3.txt').split(
	'\r\n',
);

const alphas = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';

let result = 0;

for (let i = 0; i < values.length; i++) {
	const str = values[i];
	const p1 = str.substring(0, str.length / 2);
	const p2 = str.substring(str.length / 2);
	const common = p1.split('').filter((value) =>
		p2.split('').includes(value)
	)[0];
	const priority = alphas.indexOf(common) + 1;

	result += priority;
}

console.log(result);
