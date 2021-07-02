function streetFighterSelection(fighters, [y, x], moves) {
    const state = { y, x, };

    return moves.map(move => {
        if (move === "up" || move === "down") {
            state.y = move === "up" ? 0 : 1
        }

        if (move === "right" || move === "left") {
            const value = move === "right" ? state.x + 1 : state.x - 1;

            state.x = value < 0 ? fighters[state.y].length - 1 : value

            if (state.x > fighters[state.y].length - 1) {
                state.x = 0
            }

        }

        return fighters[state.y][state.x]

    })
}