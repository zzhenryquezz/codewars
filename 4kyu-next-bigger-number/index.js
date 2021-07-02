const getSortedNumbers = number => String(number)
    .split('')
    .sort((a, b) => b - a)
    .join('')

function nextBigger(numbers) {

    const maxNumber = +getSortedNumbers(numbers)

    for (let i = numbers + 1; i <= maxNumber; i++) {
        if (maxNumber === +getSortedNumbers(i)) {
            return i
        }
    }

    return -1
}