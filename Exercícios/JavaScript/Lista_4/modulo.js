// Solução para o exercício 9
function somaLista(lista) {
    let total = 0;
    let N = lista.length;
    
    for(let i=0; i<N; i++) {
        total += lista[i];
    }
    
    return total;
}

// Solução para o exercício 10
function somaNumerosPares(lista) {
    let total = 0;
    let N = lista.length;

    for(let i=0; i<N; i++) {
        if(lista[i] % 2 === 0) total += lista[i];
    }

    return total;
}

// Solução para o exercício 11
function mediaListaNumerica(lista) {
    let N = lista.length;

    if(N === 0) return 0;

    let soma = somaLista(lista);

    return soma / N;
}

const lib = { somaLista, somaNumerosPares, mediaListaNumerica }

module.exports = lib;