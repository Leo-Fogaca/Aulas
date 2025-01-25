let quadrado = document.querySelector('.quadrado')

quadrado.addEventListener('click', function() {
    if(quadrado.classList.contains('azul') === false) {
        quadrado.classList.add('azul')
    }else if(quadrado.classList.contains('azul') === true) {
        quadrado.classList.remove('azul')
    }
})