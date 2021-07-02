function accum(str) {
    const sequences = [];

    str.split('').forEach((char, index) => {
        const repeatedChar = char.repeat(index + 1).toLowerCase();

        sequences.push(repeatedChar.charAt(0).toUpperCase() + repeatedChar.slice(1))

    }, [])

    return sequences.join('-')
}