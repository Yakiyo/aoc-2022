const values = Deno.readTextFileSync('./inputs/day_6.txt').split("");


for (let i = 0; i < values.length; i++) {
	const c = new Set(values.slice(i, i + 14));
    if (Array.from(c).length === 14) {
		console.log(c);
        console.log(i + 14);
		i = values.length;
	}
}
