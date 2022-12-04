const values = Deno.readTextFileSync('./inputs/day_4.txt').split(
	'\r\n',
);

let count = 0;

for (let i = 0; i < values.length; i++) {
	const [p1, p2] = values[i].split(',');
	const q = p1.split('-');
	const r = p2.split('-');

	if (overlaps(q, r)) count++;
}

console.log(count);

function overlaps(q: string[], r: string[]) {
	const s = q.map((x) => Number(x));
	const p = r.map((x) => Number(x));
	if (s[0] <= p[0] && s[1] >= p[1]) return true;
	if (p[0] <= s[0] && p[1] >= s[1]) return true;
	return false;
}
