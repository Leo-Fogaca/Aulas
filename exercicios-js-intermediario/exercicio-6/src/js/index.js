let seta1 = document.querySelector('#seta1')
let seta2 = document.querySelector('#seta2')
let seta3 = document.querySelector('#seta3')
const setas = document.querySelectorAll('.setas')

seta1.addEventListener('click', function  () {
    let answer1 = document.querySelector('#answer1')
    if(setas[0].classList.contains('setaAtivada')) {
        answer1.innerHTML = ''
        setas[0].src = "./src/images/setinha.png"
        setas[0].classList.remove('setaAtivada')
        return;
    }
    verificarInner();
    answer1.innerHTML = '<p>Lorem ipsum dolor sit amet consectetur adipisicing Lorem ipsum dolor sit amet consectetur adipisicing</p>'
    removeClasseSetaAtivada();
    setas[0].classList.add('setaAtivada')
    for(let i = 0; i < setas.length; i++) {
        if(setas[i].classList.contains('setaAtivada')) {
            setas[i].src = "./src/images/seta aberta.png"
        } else {
            setas[i].src = "./src/images/setinha.png"
        }
    }
})

seta2.addEventListener('click', function  () {
    let answer2 = document.querySelector('#answer2')
    if(setas[1].classList.contains('setaAtivada')) {
        answer2.innerHTML = ''
        setas[1].src = "./src/images/setinha.png"
        setas[1].classList.remove('setaAtivada')
        return;
    }
    verificarInner();
    answer2.innerHTML = '<p>Lorem ipsum dolor sit amet consectetur adipisicing Lorem ipsum dolor sit amet consectetur adipisicing</p>'
    removeClasseSetaAtivada();
    setas[1].classList.add('setaAtivada')
    for(let i = 0; i < setas.length; i++) {
        if(setas[i].classList.contains('setaAtivada')) {
            setas[i].src = "./src/images/seta aberta.png"
        } else {
            setas[i].src = "./src/images/setinha.png"
        }
    }
})

seta3.addEventListener('click', function  () {
    let answer3 = document.querySelector('#answer3')
    if(setas[2].classList.contains('setaAtivada')) {
        answer3.innerHTML = ''
        setas[2].src = "./src/images/setinha.png"
        setas[2].classList.remove('setaAtivada')
        return;
    }
    verificarInner();
    answer3.innerHTML = '<p>Lorem ipsum dolor sit amet consectetur adipisicing Lorem ipsum dolor sit amet consectetur adipisicing</p>'
    removeClasseSetaAtivada();
    setas[2].classList.add('setaAtivada')
    for(let i = 0; i < setas.length; i++) {
        if(setas[i].classList.contains('setaAtivada')) {
            setas[i].src = "./src/images/seta aberta.png"
        } else {
            setas[i].src = "./src/images/setinha.png"
        }
    }
})

function verificarInner() {
    const answers = document.querySelectorAll('.answer')
    for(let i = 0; i < answers.length; i++) {
        if(answers[i].innerHTML !== ''){
            answers[i]. innerHTML = ''
        }
    }
}

function removeClasseSetaAtivada () {
    for(let i = 0; i < setas.length; i++) {
        if(setas[i].classList.contains('setaAtivada')) {
            setas[i].classList.remove('setaAtivada')
        }
    }
}







