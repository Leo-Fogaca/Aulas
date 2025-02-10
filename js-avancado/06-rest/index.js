//Rest é usado como parâmetro quando não temos certeza de quantos parâmetros vamos passar

function parabenizarAluno (mensagem, ...nomesAlunos) {
    nomesAlunos.map(nomeAluno => console.log(`${mensagem} ${nomeAluno}`))
}

parabenizarAluno('Parabéns por ter chego até aqui,', 'Leonardo', 'Bruna', 'Lucia')