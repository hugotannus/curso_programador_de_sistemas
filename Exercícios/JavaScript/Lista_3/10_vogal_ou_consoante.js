function vogalOuConsoante(c) {
	let resposta

	switch(c) {
	case "a":
	case "e":
	case "i":
	case "o":
	case "u":
		resposta = "Vogal";
		break;
	default:
		resposta = "Consoante";
	}

	return resposta;
}

console.log(vogalOuConsoante("a"));
console.log(vogalOuConsoante("b"));
console.log(vogalOuConsoante("e"));
console.log(vogalOuConsoante("x"));
console.log(vogalOuConsoante("y"));