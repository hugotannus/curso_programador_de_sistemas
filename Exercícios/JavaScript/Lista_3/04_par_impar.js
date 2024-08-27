function parOuImpar(numero) {
	let resto = numero % 2;
	return (resto == 1 || resto == -1) ? "Ímpar" : "Par";
}

console.log(parOuImpar(4));
console.log(parOuImpar(7));
console.log(parOuImpar(0));
console.log(parOuImpar(-5));