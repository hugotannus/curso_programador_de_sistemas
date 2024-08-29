const { mediaListaNumerica } = require("./modulo");

console.log(mediaListaNumerica([1, 2, 3, 4, 5]) === 3);
console.log(mediaListaNumerica([10, 20, 30, 40, 50]) === 30);
console.log(mediaListaNumerica([5, 5, 5, 5, 5]) === 5);
console.log(mediaListaNumerica([1, 3, 5, 7]) === 4);
console.log(mediaListaNumerica([]) === 0);