const { somaNumerosPares } = require("./modulo");

console.log(somaNumerosPares([1, 2, 3, 4, 5]) === 6);
console.log(somaNumerosPares([2, 4, 6, 8]) === 20);
console.log(somaNumerosPares([1, 3, 5, 7]) === 0);