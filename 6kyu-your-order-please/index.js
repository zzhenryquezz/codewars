function getNumber(word) {
    return word.split('').reduce((number, char) => isNaN(Number(char)) ? number : Number(char))
}

function order(phase) {
    const words = phase.split(' ')

    words.sort((a, b) => {
        return getNumber(a) < getNumber(b) ? -1 : 1
    })

    return words.join(' ')
}