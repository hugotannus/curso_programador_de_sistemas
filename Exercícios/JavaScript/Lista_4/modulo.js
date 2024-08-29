const div = require("../lib/divint");

// Solução para o exercício 9
function somaLista(lista) {
    let total = 0;
    let N = lista.length;

    for (let i = 0; i < N; i++) {
        total += lista[i];
    }

    return total;
}

// Solução para o exercício 10
function somaNumerosPares(lista) {
    let total = 0;
    let N = lista.length;

    for (let i = 0; i < N; i++) {
        let numero = lista[i];
        let resto = numero % 2;
        
        if (resto === 0) {
            total += numero;
        }
    }

    return total;
}

// Solução para o exercício 11
function mediaListaNumerica(lista) {
    let N = lista.length;

    if (N === 0) return 0;

    let soma = somaLista(lista);

    return soma / N;
}

// Solução para o exercício 12
function somaDigitos(numero) {
    let total = 0;

    while (numero > 0) {
        total += (numero % 10);
        numero = div(numero, 10);
    }

    return total;
}

// Solução para o exercício 13
function maiorNumero(lista) {
    let maior = -Infinity;
    for(let i=0; i<lista.length; i++) {
        let e = lista[i];

        // if(e > maior) maior = e;

        maior = Math.max(e, maior);
    }

    console.log(maior);
    return maior;
}

// Solução para o exercício 15
function inverteTexto(texto) {
    let lista = texto.split('');
    let listaInvertida = lista.reverse();
    let textoInvertido = listaInvertida.join('');

    return textoInvertido;
}

// Solução para o exercício 16
function verificaPalindromo(texto) {
    let textoInvertido = inverteTexto(texto);

    return texto == textoInvertido;
}

module.exports = {
    PI: 3.14159,
    exercicio9: somaLista, 
    mediaListaNumerica,
    somaDigitos,
    somaNumerosPares,
    maiorNumero,
    inverteTexto,
    verificaPalindromo,
};