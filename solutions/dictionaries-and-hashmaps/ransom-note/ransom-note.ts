/*
 * Complete the 'checkMagazine' function below.
 *
 * The function accepts following parameters:
 *  1. STRING_ARRAY magazine
 *  2. STRING_ARRAY note
 */

const TEST_MAGAZINE = ['two', 'times', 'three', 'is', 'not', 'four'];

const TEST_NOTE = ['two', 'times', 'two', 'is', 'four'];

export const checkMagazine = (magazine: string[], note: string[]) => {
    // Write your code here   
    const foundWords: { [key: string]: number } = {};

    magazine.forEach(word => {
        if (note.includes(word) && !foundWords[word]) {
            foundWords[word] = 1;
        } else if (foundWords[word]) {
            foundWords[word]++;
        }
    })

    console.log(note.every((word) => {
        if (foundWords[word]) {
            foundWords[word]--;
            return true;
        }
        return false;
    }) ? "Yes" : "No");

}
checkMagazine(TEST_MAGAZINE, TEST_NOTE) // No