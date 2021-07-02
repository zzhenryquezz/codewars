function inArray(array1, array2) {

    const result = array1.filter(word => array2.some(s => s.includes(word)))

    return result.sort()
}