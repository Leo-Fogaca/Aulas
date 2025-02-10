let ferverAgua = () => {
    return new Promise((resolve, reject) => {
        if(chaleiraEstaNoFogao && fogaoEstaAceso) {
            console.log('a água está fervendo')
            resolve(true)
        }else {
            console.log('Precisa colocar a chaleira no fogão e acender o fogo')
            reject(false)
        }
    })
}

let passarOCafe = () => {
    return new Promise((resolve) => {
        console.log('passando o café')
        resolve(true)
    })
}

let tomarOCafe = () => {
    return new Promise((resolve, reject) => {
        if(tomeiCafe) {
            console.log('tomei o café')
            resolve(true)
        }else {
            console.log('estou tomando ainda')
            reject(false)
        }
    })
}

let lavarAXicara = () => {
    return new Promise((resolve) => {
        console.log('lavei a xícara')
        resolve(true)
    })
}

let chaleiraEstaNoFogao = true
let fogaoEstaAceso = true
let tomeiCafe = true

async function preparacaoDoCafe() {
    await ferverAgua(chaleiraEstaNoFogao, fogaoEstaAceso)
    await passarOCafe()
    await tomarOCafe(tomeiCafe)
    await lavarAXicara()
    if(lavarAXicara) console.log('finalizado')
}

preparacaoDoCafe();

