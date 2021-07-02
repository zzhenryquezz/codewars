function permute(chars) {
    const result = []

    if (chars.length === 0) {
        return []
    }

    if (chars.length === 1) {
        return chars
    }

    for (let i = 0; i < chars.length; i++) {
        const currentChar = chars[i];
        const remainingChars = chars.slice(0, i).concat(chars.slice(i + 1));
        const remainingCharsPermuted = permute(remainingChars);

        for (let j = 0; j < remainingCharsPermuted.length; j++) {
            const permutedArray = [currentChar].concat(remainingCharsPermuted[j]);

            result.push(permutedArray.join(''));
        }

    }

    return result
}

function permutations(string) {
    return permute(string.split(''))
        .filter((perm, index, array) => array.indexOf(perm) === index)
}