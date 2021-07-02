function matrixAddition(a, b) {
    return a.map((row, rowIndex) =>
        row.map((column, columnIndex) => column + b[rowIndex][columnIndex])
    )
}