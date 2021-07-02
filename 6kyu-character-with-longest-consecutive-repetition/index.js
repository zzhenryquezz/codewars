function longestRepetition(str) {
    const chars = str.split('');

    let resultChar = "";
    let resultLength = 0;

    let currentCharLength = 1;

    str.split('').forEach((char, index) => {
        const nextChar = chars[index + 1];

        if (nextChar === char) {
            currentCharLength++;
            return
        }

        if (currentCharLength > resultLength) {
            resultChar = char
            resultLength = currentCharLength
        }

        currentCharLength = 1

    })

    return [resultChar, resultLength]
}