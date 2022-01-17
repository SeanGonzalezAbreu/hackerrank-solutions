// Complete the countTriplets function below.
const TEST_NUMBERS = [1, 3, 9, 9, 27, 81]

const COMMON_RATIO = 3;

export const countTriplets = (numbers: number[], ratio: number) => {
    const secondHashMap: { [key: number]: number } = {},
        thirdHashMap: { [key: number]: number } = {};

    let numberOfTriplets = 0;

    for (const number of numbers) {
        if (thirdHashMap[number]) {
            numberOfTriplets += thirdHashMap[number];
        }

        if (secondHashMap[number]) {
            thirdHashMap[number * ratio] =
                thirdHashMap[number * ratio]
                    ? thirdHashMap[number * ratio] + secondHashMap[number]
                    : secondHashMap[number];
        }

        secondHashMap[number * ratio] =
            secondHashMap[number * ratio]
                ? secondHashMap[number * ratio] + 1
                : 1;
    }

    return numberOfTriplets;
}

countTriplets(TEST_NUMBERS, COMMON_RATIO); // 6