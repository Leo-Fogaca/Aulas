let ordens = [
    {nome: 'Leonardo', tipo: 'Compra', quantidade: 50, ativo: 'NFLX34'},
    {nome: 'Bruna', tipo: 'Compra', quantidade: 72, ativo: 'AAPL34'},
    {nome: 'Lucia', tipo: 'venda', quantidade: 21, ativo: 'GOGL34'}
]

// Uma das diferenças de reduce para filter e map é que eu passo 2 parametros na função, passando um valor de contador inicial após as chaves, esse valor vai estar relacionado ao primeiro parametro que for passado

let quantidadeDeOrdens = ordens.reduce(function (somarOrdens, ordem) {
    console.log('Ordem', somarOrdens, ordem)
    return somarOrdens + ordem.quantidade
}, 0)

console.log(quantidadeDeOrdens)