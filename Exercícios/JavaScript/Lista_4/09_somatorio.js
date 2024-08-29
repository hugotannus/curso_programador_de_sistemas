// [1, 2, 3, 4, 5]

const somaLista = require("./modulo");

console.log(somaLista([1, 2, 3, 4, 5]) === 15);
console.log(somaLista([2, 4, 6, 8]) === 20);
console.log(somaLista([1, 3, 5, 7]) === 16);
console.log(somaLista([0]) === 0);
console.log(somaLista([]) === 0);