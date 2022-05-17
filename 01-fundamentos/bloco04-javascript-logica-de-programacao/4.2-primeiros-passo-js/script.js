let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27]

////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////


// 1 - Nesse primeiro exercício, percorra o array imprimindo todos os valores nele contidos com a função console.log();

console.log(`Nesse primeiro exercício, percorra o array imprimindo 
todos os valores nele contidos com a função console.log();`)

for(let index = 0; index < numbers.length; index += 1) {
  console.log(numbers[index])
}

console.log('')

////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////

// 2 - Para o segundo exercício, some todos os valores contidos no array e imprima o resultado;

console.log(`Para o segundo exercício, some todos os 
valores contidos no array e imprima o resultado;`)

let soma = 0

for(let index = 0; index < numbers.length; index += 1) {
  soma += numbers[index]
}
console.log(soma)
console.log('')

////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////

// 3 - Para o terceiro exercício, calcule e imprima a média aritmética dos valores contidos no array;

console.log(`Para o terceiro exercício, calcule e imprima a 
média aritmética dos valores contidos no array;`)

const mediaAritmedica = soma / numbers.length

console.log(mediaAritmedica)

console.log('')

////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////

// 4 - Com o mesmo código do exercício anterior, caso o valor final seja maior que 20, 
//     imprima a mensagem: "valor maior que 20". Caso não seja, imprima a mensagem: "valor menor ou igual a 20";

if (mediaAritmedica > 20) {
  console.log('valor maior que 20')
} else {
  console.log('valor menor ou igual a que 20')
}

console.log('')

////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////

// 5 - Utilizando for, descubra qual o maior valor contido no array e imprima-o;
let higherNumber = 0
// com for;
console.log('com for')
for (let index = 0; index < numbers.length; index += 1) {
  higherNumber = numbers[index]

  for(let index = 0; index < numbers.length; index += 1) {
    if (higherNumber < numbers[index]) {
      higherNumber = numbers[index]
    }
  }
}
console.log(higherNumber)

// sem for;
console.log('sem for')
const maxNumber = Math.max(...numbers)
console.log(maxNumber)
console.log('')

////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////

// 6 - Descubra quantos valores ímpares existem no array e imprima o resultado. 
//     Caso não exista nenhum, imprima a mensagem: "nenhum valor ímpar encontrado";

let counter = 0

for(let index = 0; index < numbers.length; index += 1) {
  if (numbers[index] % 2 !== 0) {
    counter++
  }
}
if (counter === 0) {
  console.log('nenhum valor ímpar encontrado!')
} else {
  console.log(`${counter} números ímpares encontrados`)
  counter = 0
}
console.log('')

////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////

// 7 - Utilizando for, descubra qual o menor valor contido no array e imprima-o;

let smallestNumber = 0
// com for;
console.log('com for')
for (let index = 0; index < numbers.length; index += 1) {
  smallestNumber = numbers[index]

  for(let index = 0; index < numbers.length; index += 1) {
    if (smallestNumber > numbers[index]) {
      smallestNumber = numbers[index]
    }
  }
}
console.log(smallestNumber)

// sem for;
console.log('sem for')
const minNumber = Math.min(...numbers)
console.log(minNumber)
console.log('')

////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////

// 8 - Utilizando for, crie um array que vá de 1 até 25 e imprima o resultado;

let upToTwentyFive = []
for (let index = 0; index < 26; index += 1){
  upToTwentyFive.push(index)
}
console.log(upToTwentyFive)
console.log('')


////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////

// 9 - Utilizando o array criado no exercício anterior 
//     imprima o resultado da divisão de cada um dos elementos por 2.

for (let index = 0; index < upToTwentyFive.length; index += 1){
  console.log(upToTwentyFive[index] / 2)
}

////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////