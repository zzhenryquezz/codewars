function fibo(number) {
    let a = 0
    let b = 1;

    for (let i = 2; i <= number; i++) {
        let current = a;

        a = b;

        b += current;
    }

    return b;
}

function productFib(product) {
    let result = null;
    let current = 0

    while (result === null) {
        const fibos = [
            fibo(current, product),
            fibo(current + 1, product)
        ]

        if (fibos[0] * fibos[1] >= product) {
            result = [...fibos, fibos[0] * fibos[1] === product]
        }

        current++
    }

    return result

}