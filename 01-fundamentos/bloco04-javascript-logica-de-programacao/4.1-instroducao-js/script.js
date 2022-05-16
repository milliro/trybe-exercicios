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
console.log('Escreva um programa que receba o nome de uma peça de xadrez e retorne os movimentos que ela faz.')
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

// 7 - Escreva um programa que converte uma nota dada em porcentagem (de 0 a 100) em conceitos de A a F.
const evaluationGrade = 60

console.log('Escreva um programa que converte uma nota dada em porcentagem (de 0 a 100) em conceitos de A a F.')
if (evaluationGrade < 0 || evaluationGrade > 100) {
  console.log('Error: Invalid value.')

} else if (evaluationGrade >= 90) {
  console.log('You got an A') 

} else if (evaluationGrade >= 80) {
  console.log('You got an B') 

} else if (evaluationGrade >= 70) {
  console.log('You got an C') 

} else if (evaluationGrade >= 60) {
  console.log('You got an D') 

} else if (evaluationGrade >= 50) {
  console.log('You got an E') 
  
} else if (evaluationGrade < 50){
  console.log('You got an F') 
}
console.log('')

////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////

// 8 - Escreva um programa que defina três números em constantes e retorne true se pelo menos uma das três for par. 
//     Caso contrário, ele retorna false.

const num1 = 20
const num2 = 16
const num3 = 18

const atLeastOneIsEven = num1 % 2 === 0 || num2 % 2 === 0 || num3 % 2 === 0

console.log(`Escreva um programa que defina três números em constantes e retorne true se pelo menos uma das três for par. Caso contrário, ele retorna false.`)
if (atLeastOneIsEven) {
  console.log('true')
} else {
  console.log('false')
}
console.log('')

////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////

// 9 - Escreva um programa que defina três números em constantes e retorne true se pelo menos uma das três for ímpar. 
//     Caso contrário, ele retorna false.

const atLeastOneIsOdd = num1 % 2 !== 0 || num2 % 2 !== 0 || num3 % 2 !== 0

console.log(`Escreva um programa que defina três números em constantes e retorne true se pelo menos uma das três for ímpar. Caso contrário, ele retorna false.`)
if (atLeastOneIsOdd) {
  console.log('true')
} else {
  console.log('false')
}
console.log('')

////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////

// 10 - Escreva um programa que se inicie com dois valores em duas constantes diferentes: 
//      O custo de um produto e seu valor de venda. A partir dos valores, calcule quanto de lucro 
//      (valor de venda descontado o custo do produto) a empresa terá ao vender mil desses produtos.

const costValue = 488
const saleValue = 760

if (costValue >= 0 && saleValue >= 0) {
  const fullCostValue = costValue * 1.2
  const profit = saleValue - fullCostValue
  console.log(`By selling 1.000 of these products, the company will earn ${profit * 1000}$.`)
} else {
  console.log('Error: Impossible to sell a product with negative value. Please enter a valid value.')
}
console.log('')

////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////

// 11 - Uma pessoa que trabalha de carteira assinada no Brasil tem descontados de seu salário bruto o INSS e o IR. 
//      Faça um programa que, dado um salário bruto, calcule o líquido a ser recebido.

const grossWage = 2000000

if (grossWage < 0) {
  console.log('Error: Value entered is not valid')

} else if (grossWage <= 1556.94) {
  const aliquot = grossWage * 0.08
  const grossWageDeduced = grossWage - aliquot

  if (grossWageDeduced <= 1903.98) {
    console.log(`O salário líquido é de ${grossWageDeduced}`)

  } else if (grossWageDeduced <= 2826.65) {
    const irAliquot = (grossWageDeduced * 0.075) - 142.8
    const netWage = grossWageDeduced - irAliquot

    console.log(`O salário líquido é de ${netWage}`)

  } else if (grossWageDeduced <= 3751.05) {
    const irAliquot = (grossWageDeduced * 0.15) - 354.80
    const netWage = grossWageDeduced - irAliquot

    console.log(`O salário líquido é de ${netWage}`)

  } else if (grossWageDeduced <= 4664.68) {
    const irAliquot = (grossWageDeduced * 0.225) - 636.13
    const netWage = grossWageDeduced - irAliquot

    console.log(`O salário líquido é de ${netWage}`)

  } else {
    const irAliquot = (grossWageDeduced * 0.275) - 869.36
    const netWage = grossWageDeduced - irAliquot

    console.log(`O salário líquido é de ${netWage}`)
  }

} else if (grossWage <=  2594.92) {
  const aliquot = grossWage * 0.09
  const grossWageDeduced = grossWage - aliquot
  
  if (grossWageDeduced <= 1903.98) {
    console.log(`O salário líquido é de ${grossWageDeduced}`)

  } else if (grossWageDeduced <= 2826.65) {
    const irAliquot = (grossWageDeduced * 0.075) - 142.8
    const netWage = grossWageDeduced - irAliquot

    console.log(`O salário líquido é de ${netWage}`)

  } else if (grossWageDeduced <= 3751.05) {
    const irAliquot = (grossWageDeduced * 0.15) - 354.80
    const netWage = grossWageDeduced - irAliquot

    console.log(`O salário líquido é de ${netWage}`)

  } else if (grossWageDeduced <= 4664.68) {
    const irAliquot = (grossWageDeduced * 0.225) - 636.13
    const netWage = grossWageDeduced - irAliquot

    console.log(`O salário líquido é de ${netWage}`)

  } else {
    const irAliquot = (grossWageDeduced * 0.275) - 869.36
    const netWage = grossWageDeduced - irAliquot

    console.log(`O salário líquido é de ${netWage}`)
  }

} else if (grossWage <= 5189.82) {
  const aliquot = grossWage * 0.11
  const grossWageDeduced = grossWage - aliquot

  if (grossWageDeduced <= 1903.98) {
    console.log(`O salário líquido é de ${grossWageDeduced}`)

  } else if (grossWageDeduced <= 2826.65) {
    const irAliquot = (grossWageDeduced * 0.075) - 142.8
    const netWage = grossWageDeduced - irAliquot

    console.log(`O salário líquido é de ${netWage}`)

  } else if (grossWageDeduced <= 3751.05) {
    const irAliquot = (grossWageDeduced * 0.15) - 354.80
    const netWage = grossWageDeduced - irAliquot

    console.log(`O salário líquido é de ${netWage}`)

  } else if (grossWageDeduced <= 4664.68) {
    const irAliquot = (grossWageDeduced * 0.225) - 636.13
    const netWage = grossWageDeduced - irAliquot

    console.log(`O salário líquido é de ${netWage}`)

  } else {
    const irAliquot = (grossWageDeduced * 0.275) - 869.36
    const netWage = grossWageDeduced - irAliquot

    console.log(`O salário líquido é de ${netWage}`)
  }

} else {
  const grossWageDeduced = grossWage - 570.88

  if (grossWageDeduced <= 1903.98) {
    console.log(`O salário líquido é de ${grossWageDeduced}`)

  } else if (grossWageDeduced <= 2826.65) {
    const irAliquot = (grossWageDeduced * 0.075) - 142.8
    const netWage = grossWageDeduced - irAliquot

    console.log(`O salário líquido é de ${netWage}`)

  } else if (grossWageDeduced <= 3751.05) {
    const irAliquot = (grossWageDeduced * 0.15) - 354.80
    const netWage = grossWageDeduced - irAliquot

    console.log(`O salário líquido é de ${netWage}`)

  } else if (grossWageDeduced <= 4664.68) {
    const irAliquot = (grossWageDeduced * 0.225) - 636.13
    const netWage = grossWageDeduced - irAliquot

    console.log(`O salário líquido é de ${netWage}`)

  } else {
    const irAliquot = (grossWageDeduced * 0.275) - 869.36
    const netWage = grossWageDeduced - irAliquot

    console.log(`O salário líquido é de ${netWage}`)
  }
}