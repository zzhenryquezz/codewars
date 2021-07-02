function rgb(r, g, b) {
    return [r, g, b]
        .map(c => Math.max(0, Math.min(255, c)))
        .map(c => c.toString(16).toUpperCase())
        .reduce((result, hex) => result + (hex.length == 1 ? "0" + hex : hex), '')
}