function ferverAgua () {
    console.log('botei água ferver')
    setTimeout(function (){
        console.log('água ferveu')
        passarOCafe()
    }, 4000)
}

function prepararCafe () {
    console.log('pegar o pó do café')
    console.log('pegar filtro do café')
    console.log('colocar o café no filtro')
    console.log('colocar o filtro em cima da xícara')
}

function passarOCafe () {
    console.log('passando o café')
}

ferverAgua()
prepararCafe()