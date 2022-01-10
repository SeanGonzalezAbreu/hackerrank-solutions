/*
 * Complete the 'hourglassSum' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts 2D_INTEGER_ARRAY arr as parameter.
 */
const TEST_ARRAY: number[][] = [
    [1, 1, 1, 0, 0, 0],
    [0, 1, 0, 0, 0, 0],
    [1, 1, 1, 0, 0, 0],
    [0, 0, 2, 4, 4, 0],
    [0, 0, 0, 2, 0, 0],
    [0, 0, 1, 2, 4, 0],
];

export const hourglassSum = (array: number[][]) => {
    // Write your code here
    let largestHourglass = 0;

    for (let i = 0; i < 4; i++) {
        for (let j = 0; j < 4; j++) {
            const hourglass: number[] = [
                array[i][j],
                array[i][j + 1],
                array[i][j + 2],
                array[i + 1][j + 1],
                array[i + 2][j],
                array[i + 2][j + 1],
                array[i + 2][j + 2],
            ];

            const currentHourglass = hourglass.reduce(
                (total, value) => total + value,
                0
            );

            if (currentHourglass > largestHourglass || (i === 0 && j === 0)) {
                largestHourglass = currentHourglass;
            }
        }
    }

    return largestHourglass;
};

hourglassSum(TEST_ARRAY)// 19