let novoComentario = function() {
    let inputDoComentario = document.getElementsByName('comentario')

    let textoDigitado = inputDoComentario[0].value

    let novosComentarios = document.getElementById('novos-comentarios')

    novosComentarios.innerHTML += "<p>Novo comentário: " + textoDigitado + '<p>'
    
}

let trocarCorDeFundoTexto1 = function() {
    let paragrafos = document.getElementsByClassName('paragrafo')

    paragrafos[0].style.backgroundColor = 'Aqua'
}

let trocarFonteTexto2 = function() {
    let paragrafos = document.getElementsByClassName('paragrafo')

    paragrafos[1].classList.add('fonte-maior')
}

let masculinoRadio = document.getElementById('masculino')
let femininoRadio = document.getElementById('feminino')

function marcarRadio(genero) {
    if(genero === 'M') {
        masculinoRadio.checked = true
    }else if(genero === 'F') {
        femininoRadio.checked = true
    }
}
