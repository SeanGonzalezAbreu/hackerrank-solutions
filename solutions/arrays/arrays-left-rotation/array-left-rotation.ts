/*
 * Complete the 'rotLeft' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts following parameters:
 *  1. INTEGER_ARRAY a
 *  2. INTEGER d
 */

const TEST_ARRAY = [1, 2, 3, 4, 5];

export const rotateLeft = (array: number[], rotations: number) => {
    for (let index = 0; index < rotations; index++) {
        const firstElement = array[0];

        array.shift();
        
        array.push(firstElement);
    }

    return array;
}

rotateLeft(TEST_ARRAY, 4) // [ 5, 1, 2, 3, 4 ]

