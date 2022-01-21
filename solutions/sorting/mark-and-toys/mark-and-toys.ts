/*
 * Complete the 'maximumToys' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER_ARRAY prices
 *  2. INTEGER k
 */
const TEST_PRICES = [1, 12, 5, 111, 200, 1000, 10]

const TEST_BUDGET = 50;

export const maximumToys = (prices: number[], budget: number) => {
    const sortedPrices = prices.sort((a, b) => a - b);

    let numberOfToys = 0;

    let boughtToysPrice = 0;

    for (let index = 0; index < sortedPrices.length; index++) {
        const toyPrice = sortedPrices[index]
        if (boughtToysPrice + toyPrice <= budget) {
            boughtToysPrice += toyPrice;
            numberOfToys++
        }
        else {
            break;
        }
    }

    return numberOfToys;
}

maximumToys(TEST_PRICES, TEST_BUDGET) // 4
