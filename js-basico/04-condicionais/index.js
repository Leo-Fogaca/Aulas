// IF, ELSE IF E ELSE

let animeDoAno = 'Frieren'

if(animeDoAno === 'One Piece') {
    console.log('O melhor anime desse ano é One Piece')
}else if(animeDoAno === 'Frieren') {
    console.log('O melhor anime desse ano é Frieren')
}else {
    console.log('É um anime qualquer')
}


// OPERADOR TERNÁRIO COM IF E ELSE

animeDoAno === 'One Piece' ? console.log('O melhor anime desse ano é One Piece') : console.log('Um anime qualquer')

// SWITCH

// switch(parâmetro){
//   case 1:
//      bloco de código;
//      break
//   case 2:
//   default:
//      bloco de código;
//      break

let notaFilme = 5;

switch(notaFilme) {
    case 1:
    case 2:
        console.log('filme ruim')
        break
    case 3:
    case 4:
        console.log('filme mediano')
        break
    case 5:
        console.log('filme excelente')
        break
    default:
        console.log('nota inválida')
} 