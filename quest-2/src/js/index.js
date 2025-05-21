let dadosDoUsuario = document.querySelectorAll('.dados')
let classeNone = document.querySelectorAll('.none')
let botaoEnviar = document.getElementById('enviar')

botaoEnviar.addEventListener('click', function () {
    validacaoCampos();
})

function validacaoCampos() {
    for (let i = 0; i < dadosDoUsuario.length; i++) {
        if (dadosDoUsuario[i].value === '') {
            dadosDoUsuario[i].style.border = '1px solid #F52E2E'
            classeNone[i].style.display = 'block'
            dadosDoUsuario[i].required = true
        } else {
            dadosDoUsuario[i].style.border = '1px solid #00C22B'
            classeNone[i].style.display = 'none'
        }
    }
}


