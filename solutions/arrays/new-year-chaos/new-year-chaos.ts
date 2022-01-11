const TEST_QUEUE = [2, 1, 5, 3, 4];

const CHAOTIC_QUEUE = [2, 5, 1, 3, 4]

export const minimumBribes = (queue: number[]) => {
    let bribes = 0, p1 = 1, p2 = 2, p3 = 3;

    for (let index = 0; index < queue.length; index++) {
        switch (true) {
            case queue[index] === p1:
                p1 = p2;
                p2 = p3;
                p3++;
                break;
            case queue[index] === p2:
                p2 = p3;
                p3++;
                bribes++;
                break;
            case queue[index] === p3:
                bribes += 2;
                p3++;
                break;
            default:
                console.log("Too chaotic")
                return;
        }
    }

    console.log(bribes)
}

minimumBribes(TEST_QUEUE)