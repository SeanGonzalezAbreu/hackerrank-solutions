const VALUES_TO_SWAP = [1, 3, 5, 2, 4, 6, 7]

// Complete the minimumSwaps function below.
const minimumSwaps = (array: number[]) => {
    let swapCount = 0;

    const swap = (a: number, b: number) => {
        const aux = array[a];
        array[a] = array[b];
        array[b] = aux;
    }

    for (let index = 0; index < array.length; index++) {
        while (array[index] !== index + 1) {
            swap(index, array[index] - 1);
            swapCount++;
        }
    }

    return swapCount;
}

minimumSwaps(VALUES_TO_SWAP) // 3