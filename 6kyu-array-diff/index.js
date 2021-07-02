function arrayDiff(items, itemsToRemove) {
    return items.filter(i => !itemsToRemove.some(remove => i === remove))
}