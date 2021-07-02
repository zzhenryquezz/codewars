function findOdd(array) {
    return array
        .reduce((result, a) => array.filter(n => n === a).length % 2 !== 0 ? a : result);
}