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
const highestNumberAmongAbc = a > b && a > c ? a : b > a && b > c ? b : c
console.log(`O maior número entre ${a}, ${b} e ${c} é "${highestNumberAmongAbc}"`)
console.log('')