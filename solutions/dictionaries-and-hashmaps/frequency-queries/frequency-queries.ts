const TEST_QUERY = [[1, 5], [1, 6], [3, 2], [1, 10], [1, 10], [1, 6], [2, 5], [3, 2]];

export const getQueryFrequency = (queries: number[][]) => {
    const dataTable: { [key: number]: number } = {}, frequencyTable: { [key: number]: number } = {}, results: number[] = [];

    queries.forEach(([operationKey, dataElement]) => {
        switch (operationKey) {
            case 1:
                const frequency = dataTable[dataElement] > 0 ? dataTable[dataElement] + 1 : 1;

                dataTable[dataElement] = frequency;

                frequencyTable[frequency] = frequencyTable[frequency] > 0 ? frequencyTable[frequency] + 1 : 1;

                frequencyTable[frequency - 1] = frequencyTable[frequency - 1] > 0 ? frequencyTable[frequency - 1] - 1 : 0;

                break;

            case 2:
                if (dataTable[dataElement]) {
                    const frequency =
                        dataTable[dataElement] - 1;

                    dataTable[dataElement] = frequency;

                    frequencyTable[frequency + 1] = (frequencyTable[frequency + 1] - 1) < 0 ? 0 : frequencyTable[frequency + 1] - 1;

                    frequencyTable[frequency] += 1;
                }

                break;

            case 3:
                results.push(frequencyTable[dataElement] ? 1 : 0);

                break;
        }
    });

    return results;
}

getQueryFrequency(TEST_QUERY); // [0, 1]