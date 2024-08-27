function aprovadoOuReprovado(media) {
	return media < 7 ? "Reprovado" : "Aprovado";
}

console.log(aprovadoOuReprovado(10));
console.log(aprovadoOuReprovado(7.0));
console.log(aprovadoOuReprovado(6.95));
console.log(aprovadoOuReprovado(8.8));
console.log(aprovadoOuReprovado(0));
console.log(aprovadoOuReprovado(2.725));