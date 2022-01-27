const TEST_ARRAY = [5, 1, 5, 5, 3, 2]

export const countingSort = (array: number[]) => {
    console.log("Array to Sort: ", array);

    const countArray = new Array(Math.max(...array) + 1).fill(0);

    for (const element of array) {
        countArray[element]++;
    }

    console.log("Count Array: ", countArray)

    const accumulationArray = [0];

    let accumulator = 0;

    for (let index = 0; index < countArray.length - 1; index++) {
        accumulator += countArray[index];

        accumulationArray.push(accumulator);
    }

    console.log("Accumulation Array: ", accumulationArray)


    const sortedArray = new Array<Number>(array.length).fill(0);

    for (let index = 0; index < array.length; index++) {
        const element = array[index];
        sortedArray[accumulationArray[element]] = element;
        accumulationArray[element]++;
    }

    console.log("Sorted Array: ", sortedArray);

    return sortedArray;
}

countingSort(TEST_ARRAY) // [ 1, 2, 3, 5, 5, 5 ]