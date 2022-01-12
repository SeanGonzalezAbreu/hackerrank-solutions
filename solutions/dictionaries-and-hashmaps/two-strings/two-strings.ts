const createHashMap = (word: string) => word.split('').reduce<{ [key: string]: boolean }>((letters, letter) => {
    if (!letters[letter]) {
        letters[letter] = true;
    }
    return letters;
}, {})

/*
 * Complete the 'twoStrings' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts following parameters:
 *  1. STRING s1
 *  2. STRING s2
 */
const FIRST_WORD = 'hello', SECOND_WORD = 'world';

const twoStrings = (firstWord: string, secondWord: string) => {
    // Write your code here
    const firstLetters = createHashMap(firstWord), secondLetters = createHashMap(secondWord);

    for (let index = "a".charCodeAt(0); index < "z".charCodeAt(0); index++) {
        if (secondLetters[String.fromCharCode(index)] && firstLetters[String.fromCharCode(index)]) {
            return "YES";
        }
    }

    return "NO";
}

console.log(twoStrings(FIRST_WORD, SECOND_WORD)); // YES