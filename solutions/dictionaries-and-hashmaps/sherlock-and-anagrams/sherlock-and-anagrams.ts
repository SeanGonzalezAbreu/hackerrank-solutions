const TEST_WORD = 'ifailuhkqq'

const sherlockAndAnagrams = (word: string) => {
    const letters = word.split("");

    const anagramDictionary: { [key: string]: number } = {};

    let anagramsCount = 0;

    for (let i = 0; i < letters.length; i++) {
        for (let j = i; j < letters.length; j++) {
            const newWord = word.substring(i, j + 1).split('').sort().join("");
            if (!anagramDictionary[newWord]) {
                anagramDictionary[newWord] = 1;
            } else {
                anagramDictionary[newWord] += 1;
            }
        }
    }

    for (const word in anagramDictionary) {
        if (anagramDictionary[word] > 1) {
            const numberOfMatches = anagramDictionary[word];
            // https://www.mathsisfun.com/combinatorics/combinations-permutations.html
            anagramsCount += (numberOfMatches * (numberOfMatches - 1)) / 2;
        }
    }

    return anagramsCount;
}

sherlockAndAnagrams(TEST_WORD) // 3