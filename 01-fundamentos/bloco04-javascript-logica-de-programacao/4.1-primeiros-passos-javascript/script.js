// 1- Faça cinco programas, um para cada operação aritmética básica. 

const a = 5
const b = 30
const c = 12

console.log('Adição (a + b)')
console.log(a + b)
console.log('')

console.log('Subtração (a - b)')
console.log(a - b)
console.log('')

console.log('Multiplicação (a * b)')
console.log(a * b)
console.log('')

console.log('Divisão (a / b)')
console.log(a / b)
console.log('')

console.log('Módulo (a % b)')
console.log(a % b)
console.log('')

////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////

// 2 - Faça um programa que retorne o maior de dois números. 

console.log('Retorne o maior de dois números')
const higherNumber = a > b ? a : b
console.log(`O maior número entre ${a} e ${b} é "${higherNumber}"`)
console.log('')

////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////

// 3 - Faça um programa que retorne o maior de três números.

console.log('Retorne o maior de três números')
const isGreaterThan_B_And_C = a > b && a > c
const isGreaterThan_A_And_C = b > a && b > c
const highestNumberAmongAbc = isGreaterThan_B_And_C ? a : isGreaterThan_A_And_C ? b : c
console.log(`O maior número entre ${a}, ${b} e ${c} é "${highestNumberAmongAbc}"`)
console.log('')

////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////

// 4 - Faça um programa que, dado um valor definido numa constante, 
//     retorne "positive" se esse valor for positivo, 
//     "negative" se for negativo e "zero" caso contrário.

const value = 10
const positiveOrNegative = value < 0 ? 'negative' : value > 0 ? 'positivo' : 'zero'
console.log
(`Retorne "positive" se esse valor for positivo, 
"negative" se for negativo e "zero" caso contrário.`)
console.log(positiveOrNegative)
console.log('')

////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////

// 4 - Faça um programa que defina três constantes com os valores dos três ângulos internos de um triângulo. 
//     Retorne true se os ângulos representarem os ângulos de um triângulo e false, caso contrário. 
//     Se algum ângulo for inválido o programa deve retornar uma mensagem de erro.

const interiorAngleOne = 90
const interiorAngleTwo = 45
const interiorAngleThree = 45

console.log
(`Retorne true se os ângulos representarem os ângulos de um triângulo e false, caso contrário. Se algum ângulo for inválido o programa deve retornar uma mensagem de erro.`)

if (interiorAngleOne >= 0 && interiorAngleTwo >= 0 && interiorAngleThree >= 0) {
  const sumOfAngles = interiorAngleOne + interiorAngleTwo + interiorAngleThree
  const triangleOrNot = sumOfAngles === 180 ? 'true' : 'false'
  console.log(triangleOrNot)
} else {
  console.log('Error: Angle with invalid value found.')
}
console.log('')

////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////

// 6 - Escreva um programa que receba o nome de uma peça de xadrez e retorne os movimentos que ela faz.

const chessPiece = 'Pawn'
switch (chessPiece.toLowerCase()) {
  case 'king':
    console.log(chessPiece.toLowerCase())
    console.log('King moves, moving one square in a horizontal, vertical or diagonal direction. He has a special move called castling.')
    break

  case 'queen':
    console.log(chessPiece.toLowerCase())
    console.log('The Queen also called the Queen has the combined movement of the Rook and the Bishop, moving in a straight line in the ranks, columns and diagonals.')
    break

  case 'bishop':
    console.log(chessPiece.toLowerCase())
    console.log('The Bishop moves in straight lines on the diagonals of the board. Because he walks only on diagonals, his movement is restricted by the color of the squares, that is, he only reaches 32 squares on the board (light or dark).')
    break

  case 'knight':
    console.log(chessPiece.toLowerCase())
    console.log('The Knight can move to the nearest square to where it is as long as it is not on the same column, diagonal or ranks of the Board, with the characteristic shape of the letter L, being able to skip intervening pieces.')
    break

  case 'rook':
    console.log(chessPiece.toLowerCase())
    console.log('The Rook moves in a straight line in the columns and rows of the Board.')
    break 

  case 'pawn':
    console.log(chessPiece.toLowerCase())
    console.log
    (`Pawn moves to the unoccupied square immediately in front of it on the same file or on the first move optionally by two squares on the same file as long as both squares are unoccupied. Capture by taking the place occupied by the opposing piece that is diagonally in the row immediately in front of you, taking the piece's place. It has a special move called En passant.`)
    break 

  default:
    console.log('Error: Piece is not found.')
    break
}
console.log('')

////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////

// 7 - Escreva um programa que converte uma nota dada em porcentagem (de 0 a 100) em conceitos de A a F. Siga essas regras:
const evaluationGrade = 33

if (evaluationGrade >= 90) {
  console.log('You got an A') 

} else if (evaluationGrade >= 80) {
  console.log('You got an B') 

} else if (evaluationGrade >= 70) {
  console.log('You got an C') 

} else if (evaluationGrade >= 60) {
  console.log('You got an D') 

} else if (evaluationGrade >= 50) {
  console.log('You got an E') 
  
} else {
  console.log('You got an F') 
}

////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////