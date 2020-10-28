const readline = require("readline");

const moveAction = (string = null) => {
    if (!string) {
        throw new Error('Inform movements.');
    }

    const mapCoord = [[]];
    let x = 0, y = 0;
    let count = 1;

    for (let i = 0; i < string.length; i++) {
        switch(string[i]) {
            case 'N':
                y += 1;
                break;
            case 'S':
                y -= 1;
                break;
            case 'E':
                x += 1;
                break;
            case 'O':
                x -= 1;
                break;
            default:
                throw new Error('Invalid command.');
        }

        if (!mapCoord[x]) {
            mapCoord[x] = []
        }

        if (!mapCoord[x][y]) {
            count += 1;
            mapCoord[x][y] = 1;
        }
    }

    return count;
}

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Entre com a lista de movimentos: ", function(movs) {
    console.log(moveAction(movs));
    rl.close();
});