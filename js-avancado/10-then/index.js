let ferverAgua = () => {
    return new Promise((resolve, reject) => {
        if(chaleiraEstaNoFogao && fogaoEstaAceso) {
            console.log('a água está fervendo')
            resolve()
        }else {
            console.log('Precisa colocar a chaleira no fogão e acender o fogo')
            reject()
        }
    })
}

let passarOCafe = () => {
    return new Promise((resolve) => {
        console.log('passando o café')
        resolve()
    })
}

let tomarOCafe = () => {
    return new Promise((resolve, reject) => {
        if(tomeiCafe) {
            console.log('tomei o café')
            resolve()
        }else {
            console.log('estou tomando ainda')
            reject()
        }
    })
}

let lavarAXicara = () => {
    return new Promise((resolve) => {
        console.log('lavei a xícara')
        resolve()
    })
}

let chaleiraEstaNoFogao = true
let fogaoEstaAceso = true
let tomeiCafe = true

ferverAgua(chaleiraEstaNoFogao, fogaoEstaAceso)
.then(() => {
    return passarOCafe();
})
.then(() => {
    return tomarOCafe(tomeiCafe);
})
.then(() => {
    return lavarAXicara();
})
.then(() => {
    console.log('Finalizado o ritual!')
})