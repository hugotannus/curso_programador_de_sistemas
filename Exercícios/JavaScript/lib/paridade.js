function paridade(n){
	let resposta;		// "Par" ou "Impar"
	let resto = n % 2;	// Variável auxiliar

	if(resto == 1){
		resposta = "Ímpar";
	} else {
		resposta = "Par";
	}

	return resposta;
}

console.log(paridade(4)); // "Par"
console.log(paridade(7)); // "Ímpar"
console.log(paridade(0)); // "Par"
console.log(paridade(5)); // "Ímpar"