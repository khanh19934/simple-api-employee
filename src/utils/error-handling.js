const matchValue = require('../utils/pattern-matching')
const messageByCode = {
    500: 'Internal Server Error',
    _: 'Internal Server Error'
}
module.exports = {
    generalErrorHandling: (code) => {
        return {code, error: matchValue(code, messageByCode)}
    }
}