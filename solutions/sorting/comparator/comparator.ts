const TEST_PLAYERS_DATA = 'amy 100 david 100 heraldo 50 aakansha 75 aleksa 150'

const readLine = () => { // This is a mock of the HR internal func
    return TEST_PLAYERS_DATA
}

// Ignore declarations above

interface Player {
    name: string;
    score: number;
}


class Checker {
    public compare(p1: Player, p2: Player): number {
        if (p1.score === p2.score) {
            return p1.name.localeCompare(p2.name);
        }
        else {
            return p2.score - p1.score;
        }
    }
}

function main() {
    // This is weird, for this exercise we have to parse the inputs manually...
    const inputArray: Player[] = [];

    while (true) {
        let value = readLine();

        if (!value) {
            break;
        }

        const playerData = value.split(' ');

        if (playerData.length > 1) {
            inputArray.push({ name: playerData[0], score: Number(playerData[1]) })
        }
    }

    const checker = new Checker();
    const sortedInput = inputArray.sort((a, b) => checker.compare(a, b));
    sortedInput.forEach(player => console.log(player.name, player.score));
}

