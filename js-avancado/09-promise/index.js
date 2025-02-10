/*
    Promises tem 4 estados:

    Pendente: quando a promise foi criada mas não foi executada
    Realizada: quando a promise teve sucesso na execução (resolve)
    Recusada: quando teve falha na execução (reject)
    Estabelecida: quando ela foi realizada ou recusada
*/

const ferverAgua = (chaleiraEstaNoFogao, fogaoEstaAceso) => {
    return new Promise((resolve, reject) => {
        if(chaleiraEstaNoFogao && fogaoEstaAceso) {
            console.log('começando o processo de ferver a água')
            resolve()
        }else {
            console.log('precisa colocar a chaleira no fogão e acender o fogo')
            reject()
        }
    })
}

let chaleiraEstaNoFogao = true
let fogaoEstaAceso = false

ferverAgua(chaleiraEstaNoFogao, fogaoEstaAceso)
console.log('fazendo o café')