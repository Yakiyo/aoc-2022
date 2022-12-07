const values = Deno.readTextFileSync('./inputs/day_6.txt').split('');

for (let i = 0; i < values.length; i++) {
	const c = new Set(values.slice(i, i + 4));
	if (Array.from(c).length === 4) {
		console.log(c);
		console.log(i + 4);
		i = values.length;
	}
}
