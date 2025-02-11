const dataAtual = new Date()

let opcoes = {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    weekday: 'long'
}

// console.log(dataAtual.toLocaleDateString('pt-BR', opcoes))

const formatador = new Intl.DateTimeFormat('pt-BR', opcoes)

const dataFormatada = formatador.format(dataAtual)

console.log(dataFormatada)