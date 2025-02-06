let pessoas =  [
    { nome: 'Leonardo', idade: 26},
    { nome: 'Bruna', idade: 26},
    { nome: 'Tati', idade: 44}
]

let idadeDasPessoas = pessoas.map(pessoa => pessoa.nome + ' tem ' + pessoa.idade + ' anos de idade')

console.log(idadeDasPessoas)