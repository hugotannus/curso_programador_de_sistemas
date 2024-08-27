function contaVogais(palavra) {
    let contador = 0;

    for(let i=0; i < palavra.length; i++) {
        let char = palavra.charAt(i);

        switch(char){
            case "a":
            case "e":
            case "i":
            case "o":
            case "u": contador++;
        }
    }

    return contador; 
}

console.log(contaVogais("hello"));
console.log(contaVogais("hello") === 2);
console.log(contaVogais("javascript"));
console.log(contaVogais("javascript") === 3);
console.log(contaVogais("aeiou"));
console.log(contaVogais("aeiou") === 5);
console.log(contaVogais("xyz"));
console.log(contaVogais("xyz") === 0);