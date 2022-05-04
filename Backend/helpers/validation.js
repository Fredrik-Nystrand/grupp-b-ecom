const isCurrencyNumber = (input) => {
    const regex = /^[1-9]\d*(((,\d{3}){1})?(\.\d{0,2})?)$/;

    if (regex.test(input)) {
        return true
    }

    return false
}


module.exports = {
    isCurrencyNumber,
}