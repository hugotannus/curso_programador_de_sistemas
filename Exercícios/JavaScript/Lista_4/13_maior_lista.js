const { maiorNumero } = require("./modulo");

console.log(maiorNumero([1, 2, 3, 4, 5]) === 5);
console.log(maiorNumero([-1, -2, -3, -4, -5]) === -1);
console.log(maiorNumero([10, -20, -30, 40, 50]) === 50);
console.log(maiorNumero([]) === -Infinity);