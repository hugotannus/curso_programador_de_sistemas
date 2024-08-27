const   N = 10;
let     PA = 0;
let     PG = 1;

{
    let i=N;
    while(i > 0){
        PA += 2*i;
        PG *= 2;
        console.log("PA:", PA);
        console.log("PG:", PG);
        
        let x = 3 * i;
        let ln = `\n## x = 3 * ${i} => ${x}\n`
        
        console.log(ln);
        
        for(let j=1; j<=5; j++) {
            let msg = `${x} * ${j} = ${x * j}`;
            console.log(msg);
        }


        console.log("\n----\n")
        
        i--;
    }
    console.log(x);
}

console.log("\n-- RESULTADO --\n")

console.log("PA:", PA);
console.log("PG:", PG);