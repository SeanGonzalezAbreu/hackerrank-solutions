/*
 * Complete the 'activityNotifications' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER_ARRAY expenditure
 *  2. INTEGER d
 */
const TEST_EXPENDITURE = [10, 20, 30, 40, 50]

const TEST_DAYS = 3;

/*
 * Complete the 'activityNotifications' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER_ARRAY expenditure
 *  2. INTEGER d
 */
const getMedianx2 = (array: number[], days: number) => {
    let sum = 0;

    for (let index = 0; index < array.length; index++) {
        sum += array[index]
        if (sum * 2 === days) { return (index * 2 + 1) }
        if (sum * 2 > days) { return (index * 2) }
    }

    return 0;
};

const activityNotifications = (expenditures: number[], days: number) => {
    let numberOfNotifications = 0;

    const countArray = new Array(201).fill(0);

    for (let index = 0; index < days; index++) {
        countArray[expenditures[index]]++;
    }

    for (let index = days; index < expenditures.length; index++) {
        const medianx2Value = getMedianx2(countArray, days);

        if (expenditures[index] >= medianx2Value) {
            numberOfNotifications++;
        }

        if (index === expenditures.length - 1) {
            break;
        }

        countArray[expenditures[index - days]]--;

        countArray[expenditures[index]]++
    }

    return numberOfNotifications;
}

activityNotifications(TEST_EXPENDITURE, TEST_DAYS) // 1

//https://medium.com/weekly-webtips/sorting-code-challenge-breakdown-19229b32be02
//https://medium.com/@danromans/counting-sort-a10abdbbf45f