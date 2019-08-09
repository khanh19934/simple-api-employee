const matchValue = (value, pattern) => {
    const cases = Object.keys(pattern)
    const lastIndex = cases.length - 1
    const hasCorrectCase = (key, index) => {
        if (String(value) === key) return true
        if (key === '_') {
            if (index !== lastIndex) {
                throw new Error(`'_' must be the last branch.`)
            }
            return true
        }
        return false
    }
    const matchingCase = cases.find(hasCorrectCase)

    if (!matchingCase) {
        throw new ReferenceError(`Match error for value: ${value}`)
    }

    return pattern[matchingCase]
}

module.exports = matchValue