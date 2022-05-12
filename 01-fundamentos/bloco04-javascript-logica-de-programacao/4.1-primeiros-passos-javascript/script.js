// 1- Faça cinco programas, um para cada operação aritmética básica. 
// Seu programa deve ter duas constantes, a e b, definidas no começo com os valores que serão operados.
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

///////////
///////////

// 2 - Faça um programa que retorne o maior de dois números. 
console.log('Retorne o maior de dois números')
const higherNumber = a > b ? a : b
console.log(`O maior número entre ${a} e ${b} é "${higherNumber}"`)
console.log('')

// 3 - Faça um programa que retorne o maior de três números.
console.log('Retorne o maior de três números')
const isGreaterThan_B_And_C = a > b && a > c
const isGreaterThan_A_And_C = b > a && b > c
const highestNumberAmongAbc = isGreaterThan_B_And_C ? a : isGreaterThan_A_And_C ? b : c
console.log(`O maior número entre ${a}, ${b} e ${c} é "${highestNumberAmongAbc}"`)
console.log('')