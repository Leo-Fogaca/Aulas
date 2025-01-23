// ARRAY NORMAL

let animes = ['One piece', 'Naruto', 'Frieren']

console.log(animes[0])

// ARRAY MULTIDIMENSIONAL
let filmes = [
    ['Spider-man', 5, true, ['Tom Holland', 19]], 
    ['Vingadores', 5, false]
]

console.table(filmes)

// TRABALHANDO COM ARRAY

let frutas = ['banana', 'maçã', 'laranja', 'uva']

for (let i = 0; i < frutas.length; i++) {
    console.log('fruta: ' + frutas[i])
}

// USANDO FOR EACH COM OS PARAMETROS PADROZINADOS

frutas.forEach(function (item, indice, array){
    console.log(array)
})

// PROPRIEDADES DE UM ARRAY

// adicionando um elemento no FINAL do array
frutas.push('morango') 
console.log(frutas);


// excluindo um elemento no FINAL do array
frutas.pop()
console.log(frutas);

// adicionando um elemento no INICIO do array
frutas.unshift('manga')
console.log(frutas);

// excluindo um elemento no INICIO do array

frutas.shift()
console.log(frutas);

// acessando diretamente o index de um elemento

frutas.indexOf()
console.log(frutas.indexOf('laranja'));



