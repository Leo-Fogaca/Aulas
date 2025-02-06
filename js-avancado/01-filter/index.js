let pessoas = [
    { nome: 'Leonardo', idade: 26},
    { nome: 'Bruna', idade: 26},
    { nome: 'Tati', idade: 44}
]

// let pessoasComIdade26 = []
// for(let i = 0; i < pessoas.length; i++) {
//     if(pessoas[i].idade === 26) {
//         pessoasComIdade26.push(pessoas[i])
//     }
// }

// console.log(pessoasComIdade26)

//USANDO FILTER:

// let pessoasComIdade26 = pessoas.filter(function (pessoa) {
//     return pessoa.idade === 26
// })

// console.log(pessoasComIdade26)

//USANDO ARROW FUNCTION POIS SÓ TEM UMA LINHA DE CÓDIGO

let pessoasComIdade26 = pessoas.filter(pessoa => pessoa.idade === 26)

console.log(pessoasComIdade26)