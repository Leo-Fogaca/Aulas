const calculandoValor = require('./calculando-valor')

it('Não deve cobrar o valor da entrega se o valor do pedido for acima de 500 reais', () => {
    const meuPedido = {
        itens: [
            {nome: 'Poção de vida', valor: 100},
            {nome: 'Espada Longa', valor: 1000},
            {nome: 'Entrega', valor: 40, entrega: true}
        ]
    }

    const resultado = calculandoValor(meuPedido)

    expect(resultado).toBe(1100)
});

it('Deve cobrar valor da entrega se o valor do pedido for menor que 500', () => {
    const meuPedido = {
        itens: [
            {nome: 'Poção de vida', valor: 100},
            {nome: 'Espada Longa', valor: 100},
            {nome: 'Entrega', valor: 40, entrega: true}
        ]
    }

    const resultado = calculandoValor(meuPedido)

    expect(resultado).toBe(240)
});

it('Deve cobrar o valor da entrega se o valor do pedido for EXATAMENTE 500', () => {
    const meuPedido = {
        itens: [
            {nome: 'Espada Longa', valor: 500},
            {nome: 'Entrega', valor: 40, entrega: true}
        ]
    }

    const resultado = calculandoValor(meuPedido)

    expect(resultado).toBe(540)
});