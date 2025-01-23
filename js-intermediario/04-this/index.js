// Existe o THIS escopo global e local, quando começamos um código JS e usamos o THIS tem que cuidar para não puxar alguma chave do escopo global em um local e acabar dando erro.
// Para evitar isso podemos usar o 'use stric' no inicio do código para não deixar "vazar" algo do global para um escopo local

'use strict'

// console.log(this)
// this.name = 'Bruna'

// function saudar() {
//     console.log('Seja bem vindo(a), ' + this.name)
//  }

// saudar()

let comida = {
    nome: 'Ovo',
    temperatura: 0
}

comida.cozinhar = function (novaTemperatura) {
    this.temperatura = novaTemperatura
}

comida.cozinhar(100)
console.log(comida)
