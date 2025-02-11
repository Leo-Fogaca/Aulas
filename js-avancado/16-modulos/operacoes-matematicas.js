function somar(numero1, numero2) {
    return numero1 + numero2
}

function subtrair(numero1, numero2) {
    return numero1 - numero2
}

function multiplicar(numero1, numero2) {
    return numero1 * numero2
}

function dividir(numero1, numero2) {
    return numero1 / numero2
}

export {
    somar,
    subtrair,
    multiplicar,
    dividir
}

//pode ser usado export default em alguns casos, porém ele só exporta 1 função por arquivo. A estrutura seria export default função