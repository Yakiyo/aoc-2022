const str = Deno.readTextFileSync("./day_1/calorie.txt").split("\n\r");
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

console.log(val[0] + val[1] + val[2]);
