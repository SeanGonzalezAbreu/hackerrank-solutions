/*
 * Complete the 'arrayManipulation' function below.
 *
 * The function is expected to return a LONG_INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER n
 *  2. 2D_INTEGER_ARRAY queries
 */

const TEST_ARRAY = [
    [1, 2, 100],
    [2, 5, 100],
    [3, 4, 100]
];

const NUMBER_OF_ITERATION = 5;

export const arrayManipulation = (n: number, queries: number[][]) => {
    // Write your code here
    let newArray = new Array(n).fill(0);

    let max = Number.NEGATIVE_INFINITY;

    let currentValue = 0;

    for (let queryIndex = 0; queryIndex < queries.length; queryIndex++) {
        const [start, finish, value] = queries[queryIndex];

        newArray[start - 1] += value;

        if (finish < n) {
            newArray[finish] -= value;
        }
    }

    for (let index = 0; index < newArray.length; index++) {
        currentValue += (newArray[index] || 0);

        if (currentValue > max) {
            max = currentValue;
        }
    }

    return max;
}

arrayManipulation(NUMBER_OF_ITERATION, TEST_ARRAY) // 200