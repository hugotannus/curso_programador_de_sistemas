function divInt(num, div) {
    let resto = num % div;
    return (num - resto) / div;
}

module.exports = divInt;