/*
 * Complete the 'activityNotifications' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER_ARRAY expenditure
 *  2. INTEGER d
 */
const TEST_EXPENDITURE = [10, 20, 30, 40, 50]

const TEST_DAYS = 3

const median = (array: number[]) => {
    const mid = Math.floor(array.length / 2);

    return array.length % 2 !== 0 ? array[mid] : (array[mid - 1] + array[mid]) / 2;
};

const activityNotifications = (expenditure: number[], days: number) => {
    let numberOfNotifications = 0;

    for (let index = days; index < expenditure.length; index++) {
        const medianValue = median(expenditure.slice(index - days, index)); // not fast enough, this solution is O(n^2)

        if (expenditure[index] >= (2 * medianValue)) {
            numberOfNotifications++;
        }
    }

    return numberOfNotifications;
}

activityNotifications(TEST_EXPENDITURE, TEST_DAYS) // 1