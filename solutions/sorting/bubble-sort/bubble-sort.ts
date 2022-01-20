const TEST_ARRAY = [9, 7, 5, 4, 3, 2, 6, 1, 8];

export const countSwaps = (array: number[]) => {
    const swap = (a: number, b: number) => {
        const aux = array[a];
        array[a] = array[b];
        array[b] = aux;
    };

    let numSwaps = 0;

    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length - 1; j++) {
            // Swap adjacent elements if they are in decreasing order
            if (array[j] > array[j + 1]) {
                swap(j, j + 1);
                numSwaps++;
            }
        }
    }

    console.log(`Array is sorted in ${numSwaps} swaps.`);

    console.log(`First Element: ${array[0]}`);

    console.log(`Last Element: ${array[array.length - 1]}`);
}

countSwaps(TEST_ARRAY)

// Array is sorted in 25 swaps.
// First Element: 1
// Last Element: 9