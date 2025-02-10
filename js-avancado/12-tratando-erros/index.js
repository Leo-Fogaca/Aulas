//Para tratar erros no JS existe varias maneiras mas nesse conteúdo aprendi o Try, Catch, Throw e Finally (sendo o finally um pouco mais especifíco pois ele sempre vai rodar mesmo que o catch tenha pego um erro)

let ferverAgua = () => {
    return new Promise((resolve, reject) => {
        if (typeof chaleiraEstaNoFogao != 'boolean') throw console.log('Precisa ser um valor booleano')
        if (chaleiraEstaNoFogao && fogaoEstaAceso) {
            console.log('a água está fervendo')
            resolve(true)
        } else {
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
        if (tomeiCafe) {
            console.log('tomei o café')
            resolve(true)
        } else {
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
    try {
        await ferverAgua(chaleiraEstaNoFogao, fogaoEstaAceso)
        await passarOCafe()
        await tomarOCafe()
        await lavarAXicara()
        if (lavarAXicara) console.log('finalizado')
    }catch(error) {
        console.log(error)
    }finally {
        console.log('teste do finally')
    }
}

preparacaoDoCafe();