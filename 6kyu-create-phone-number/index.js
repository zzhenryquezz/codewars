function createPhoneNumber(numbers) {
    return numbers.reduce((phone, n, index) => {
        phone += n
        if (index === 2) {
            phone += ') '
        }

        if (index === 5) {
            phone += '-'
        }

        return phone
    }, '(')
}