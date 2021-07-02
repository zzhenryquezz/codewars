function getCount(str) {
    return str.match(/[aeiou]/gi) ? str.match(/[aeiou]/gi).length : 0;
}