const TEST_ARRAY = [50, 8, 3, 5, 100, 9]

const merge = (left: number[], right: number[]) => {
    const output: number[] = [];

    while (left.length && right.length) {
        if (left[0] <= right[0]) {
            output.push(left.shift() as number);
        } else {
            output.push(right.shift() as number);
        }
    }

    while (left.length) {
        output.push(left.shift() as number);
    }

    while (right.length) {
        output.push(right.shift() as number);
    }

    return output;
}

export const mergeSort = (array: number[]): number[] => {
    if (array.length < 2) {
        return array;
    }

    const middle = Math.floor(array.length / 2);

    const left = array.slice(0, middle);

    const right = array.slice(middle, array.length);

    return merge(mergeSort(left), mergeSort(right));
}

console.log(mergeSort(TEST_ARRAY)) // [ 3, 5, 8, 9, 50, 100 ]