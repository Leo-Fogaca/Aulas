// FUNÇÕES SEM PARÂMETRO
// function () {
//      bloco de código
// }

function incentivarAluno() {
    alert('Se o Naruto conseguiu virar hokage, você também consegue realizar seus sonhos')
}

incentivarAluno();


// FUNÇÕES COM PARÂMETRO
// function (parâmetro) {
//      bloco de código
// }

function soma(numero1, numero2) {
    console.log(numero1 + numero2)
}

soma(30, 30);

// FUNÇÃO COM PARÂMETRO DEFAULT

function alunoAprovado(aluno = 'Estudante') {
    return('Parabéns ' + aluno + ' Você foi aprovado')
}

console.log(alunoAprovado('Luffy'))