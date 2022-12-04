const values = Deno.readTextFileSync("./inputs/day_3.txt").split("\r\n");

const alphas = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";

let result = 0;

function getBadge(str: string[]) {
    const [p1, p2, p3] = str;
    return p1.split("").filter(v => p2.split("").includes(v) && p3.split("").includes(v))[0];
}

for (let i = 0; i < values.length; i += 3) {
    const common = getBadge([values[i], values[i + 1], values[i + 2]]);
    const priority = alphas.indexOf(common) + 1;

    result += priority;
}

console.log(result);