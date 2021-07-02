function oddOrEven(array) {
    const sum = array.reduce((result, number) => {
        return result + number;
    }, 0);

    return (sum & 1) == 0 ? 'even' : 'odd'
}