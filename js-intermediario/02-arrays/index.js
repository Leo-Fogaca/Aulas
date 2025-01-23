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

// USANDO SLICE E SPLICE

// SLICE é usado para extrair elementos de um array sem modificar o original
// a formula seria array.slice(elemento Inicial, elemento Final) (OBS: O ELEMENTO FINAL NÃO É INCLUIDO NA EXTRAÇÃO, É SÓ UM PONTO DE FINALIZAÇÃO, SOMENTE O ELEMENTO ANTERIOR SERÁ EXTRAIDO)

let frutasExtraidasSlice = frutas.slice(1, 3)
console.log(frutasExtraidasSlice)

// SPLICE também é usado para extrair elementos de um array porém ele altera o original e com ele da para subtituir elementos que estão no meio do array
// a formula seria array.splice(elemento Inicial, numero de elementos que seria excluido ou substituido após o elemento inicial)
// caso for substituir a formula seria array.splice(elemento Inicial, numero de elementos que seria excluido ou substituido após o elemento inicial, 'novos elementos')

let frutasExtraidasSplice = frutas.splice(1, 2)

let novasFrutas = frutas.splice(1, 2, 'melancia', 'pêra', 'limão')
console.log(frutasExtraidasSplice)
console.log(frutas)


