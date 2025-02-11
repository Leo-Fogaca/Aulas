//Operador spread é usado tanto para concatenar elementos iteraveis quanto para clonar elementos para poder fazer alterações sem mudar o original

let pessoas1 = ['Leonardo', 'Bruna', 'Neto']
let pessoas2 = ['Vitoria', 'Camila', 'Luiz']

let concatPessoas = [ ...pessoas1, ...pessoas2]

console.log(concatPessoas)

//Clonando objetos

let nomes = {
    nome: 'Leonardo',
    sobrenome: 'Fogaça'
}

let cloneNomes = { ...nomes}

console.log(cloneNomes)