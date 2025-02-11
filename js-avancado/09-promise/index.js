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

//Podemos usar Promise.all quando queremos testar mais de uma promise de uma só vez, porém, se um delas der erro o valor que ira retornar será um erro mesmo que as outras tenham sido realizadas

//Podemos usar Promise.allSettled quando queremos testar mais de uma promise de uma vez, ela ira retornar os resultados e o estado de cada uma