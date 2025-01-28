let setaEsquerda = document.querySelector('#seta-esquerda')
let setaDireita = document.querySelector('#seta-direita')
let slides = document.querySelectorAll('.slide')

let slideAtual = 0

setaDireita.addEventListener('click', function() {
    if(slideAtual === slides.length - 1) {
        return;
    }
   
    esconderImagem();

    slideAtual++
    slides[slideAtual].classList.add('mostrar')

    mostrarOuEsconderAsSetas();
})


setaEsquerda.addEventListener('click', function() {
    if(slideAtual === 0) {
        return;
    }
   
    esconderImagem();

    slideAtual--
    slides[slideAtual].classList.add('mostrar')

    mostrarOuEsconderAsSetas();
})



function esconderImagem () {
    const imagemAberta = document.querySelector('.mostrar')
    imagemAberta.classList.remove('mostrar')
}

function mostrarOuEsconderAsSetas () {
    if(slideAtual !== 0) {
        setaEsquerda.classList.remove('opacidade')
    } else{
        setaEsquerda.classList.add('opacidade')
    }

    if(slideAtual === slides.length - 1) {
        setaDireita.classList.add('opacidade')
    } else{
        setaDireita.classList.remove('opacidade')
    }
}