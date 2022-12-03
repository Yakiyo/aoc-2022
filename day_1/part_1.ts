const str = Deno.readTextFileSync("./inputs/day_1.txt").split("\n\r");
const val: number[] = [];

str.forEach((e) => {
  const v = e.split("\r\n");
  const c = v.map((x) => {
    x.replaceAll("\r", "").replaceAll("\n", "");
    return Number(x);
  }).reduce((a, b) => a + b, 0);
  val.push(c);
});
val.sort((a, b) => a > b ? -1 : 1);

console.log(val[0]);
