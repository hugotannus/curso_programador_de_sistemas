function calculaMedia(n1, n2, n3) {
   let media;

   media = ( Number(n1) + Number(n2) + Number(n3) ) / 3;

   return media;
}

let c1 = calculaMedia(10,20,30);
console.log(c1);

let c2 = calculaMedia(5,15,25);
console.log(c2);

let c3 = calculaMedia("2","2","2");
console.log(c3);