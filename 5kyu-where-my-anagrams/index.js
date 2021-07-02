function anagrams(word, array) {
    return array.filter(w => {
        let chars = word.split('')
        let current = w.split('')

        return current.reduce((result, char) => {
            if (!chars.includes(char)) {
                return false
            }

            chars.splice(chars.indexOf(char), 1)

            return result;

        }, true)

    })
}