//Para desestruturar um objeto a formula é:

//let { nomeDaPropriedade: variavel } = objetoQueVaiSerDesestruturado
//Caso o nome da variavel for o mesmo que a propriedade do objeto pode simplesmente escrever só o nome da variável

let pessoa = {
    nome: 'Leonardo',
    sobrenome: 'Fogaça',
    idade: 26
}

let { nome, sobrenome } = pessoa

console.log(nome)
console.log(sobrenome)

//Para desestruturar um array a formula é

//let [nomeDaVariavel] = arrayQueVaiSerDesestruturado
//Diferente de desestruturar um objeto, o array ele vai de acordo com o indice

let numeros = [1, 2, 3]

let [um, dois] = numeros

console.log(um)
console.log(dois)