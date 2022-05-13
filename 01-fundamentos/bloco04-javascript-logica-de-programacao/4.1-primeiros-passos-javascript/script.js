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