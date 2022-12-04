export function exists(p: string): boolean {
	try {
		Deno.statSync(p);
		return true;
	} catch (_) {
		return false;
	}
}

if (Deno.args.length < 2) {
	console.error(
		'Please pass both day number and part number argument',
	);
	Deno.exit(1);
}

const [day, part] = Deno.args;

if (isNaN(Number(day)) || isNaN(Number(part))) {
	console.error('Arguments day and part must both be whole integers');
	Deno.exit(1);
}

const path = `./day_${day}/part_${part}.ts`;

if (!exists(path)) {
	console.error('Invalid path. Does not exist');
	Deno.exit(1);
}

await import(path);

Deno.exit(0);
