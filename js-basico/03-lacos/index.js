// FOR
//  for(inicializador; condição; incremento) {
//      declaração;
//  }

for(let i = 0; i < 5; i++) {
    console.log(i);
}

// WHILE
//  while(condição) {
//      bloco de execução;
// }

let a = 10
let b = 15

while(a < b) {
    console.log("o valor atual de a é " + a);
    a++;
}

// DO WHILE
//  do {
//      bloco de execução;
// }while(condição)

let x = 1
let z = 5

do {
    console.log("o valor de x agora virou " + x);
    x++
}while(x <= z);