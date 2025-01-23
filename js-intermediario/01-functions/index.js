// FUNÇÃO NORMAL

function somar(numero1, numero2) {
    let resultado = numero1 + numero2
    return resultado
}

console.log(somar(30, 5));


// FUNÇÃO ANONIMA

let resultadoDaMultiplicacao = function(numero1, numero2) {
    return numero1 * numero2
}

console.log(resultadoDaMultiplicacao(10, 5))

// ARROW FUNCTIONS

const aluno = nomeAluno => {
    return 'Parabéns, ' + nomeAluno + ', você chegou até aqui!'
}

console.log(aluno('Leo'));
// Em caso de ser somente uma linha de código da pra excluir as chaves e o return.

const aluno1 = nomeAluno => 'Parabéns, ' + nomeAluno + ', você chegou até aqui'

console.log(aluno1('Bruna'))

// HIGH ORDER FUNCTIONS

function multiplicar(multiplicador) {
    return function (numero) {
        return numero * multiplicador
    }
}

let dobrar = multiplicar(2)
let triplicar = multiplicar(3)
let quadruplicar = multiplicar(4)

console.log(triplicar(10))

function calcularIdade (idade, mesDeNascimento, imprimir) {
    let mesAtual = 1
    let anoDeNascimento = 2025 - idade
    if(mesAtual < mesDeNascimento){
        anoDeNascimento--
    }
    imprimir(anoDeNascimento)
}

function imprimirAnoDeNascimento(anoDeNascimento) {
    console.log('Seu ano de nascimento é: ' + anoDeNascimento)
}

calcularIdade(26, 11, imprimirAnoDeNascimento)