const { verificaNumero } = require("./modulo");

console.log(verificaNumero("12345") === true);
console.log(verificaNumero("abc123") === false);
console.log(verificaNumero("67890") === true);