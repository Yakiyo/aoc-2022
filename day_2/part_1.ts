const val = Deno.readTextFileSync("./day_2/input.txt").split("\r\n");

const items = {
    ROCK : 1,
    PAPER : 2,
    SCISSOR : 3,
    A : 1,
    B : 2,
    C : 3,
    X : 1,
    Y : 2,
    Z : 3
}

const result = {
    LOSE : 0,
    DRAW : 3,
    WIN : 6
}

let score = 0;

for (let i = 0; i < val.length; i++) {
    const k = val[i].split(" ");
    // @ts-ignore: ??
    const op = items[k[0]];
    // @ts-ignore: ??
    const me = items[k[1]];
    
    if (op === me) {
        score += me + result.DRAW;
        continue;
    }

    if (op === items.ROCK) {
        score += me;
        score += (me === items.PAPER ? result.WIN : result.LOSE);
    } 
    if (op === items.PAPER) {
        score += me;
        score += (me === items.SCISSOR ? result.WIN : result.LOSE);
    } 
    if (op === items.SCISSOR) {
        score += me;
        score += (me === items.ROCK ? result.WIN : result.LOSE);
    }
}
console.log(score);
