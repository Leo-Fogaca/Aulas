async function gerarBaralho() {
    const url = "https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1"
    const resposta = await fetch(url)
    return await resposta.json()
}

async function comprarUmaCarta(deck_id) {
    const url = `https://deckofcardsapi.com/api/deck/${deck_id}/draw/?count=1`
    const resposta = await fetch(url)
    return await resposta.json()
}

async function comprarUmaCartaDoMeuBaralho() {
    const baralho = await gerarBaralho()
    const carta = await comprarUmaCarta(baralho.deck_id)
    const imagemCarta = carta.cards[0].image
    document.getElementById('carta').src = imagemCarta
}

const botao = document.getElementById('botao')
botao.addEventListener('click', () => comprarUmaCartaDoMeuBaralho())

comprarUmaCartaDoMeuBaralho();


