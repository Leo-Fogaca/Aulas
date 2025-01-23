let tenis = {
    cor: 'Preto',
    tamanho: 41,
    emEstoque: true
}

console.log(tenis.cor)

// Adicionando uma nova chave em um objeto

tenis.valor = 200

console.log(tenis);

// Criando MÉTODOS (funções dentro de um objeto)

let usuario = {
    nome: 'Leonardo',
    idade: 26,
    excluir: function () {
        console.log('O usuário, ' + this.nome + ' foi excluido')
    }
}

usuario.excluir()