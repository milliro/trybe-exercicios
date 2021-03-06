// 1 - Crie um algoritmo que retorne o fatorial de 10.
const num = 10;
let numFatorial = num;
for (let index = 0; index < num; index += 1) {
  numFatorial *= (num - index);
}
console.log(`O fatorial de ${num} é ${numFatorial}`);
console.log('')

////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////

// 2 - Agora, desenvolva um algoritmo que é capaz de inverter uma palavra. 
//     Por exemplo, a palavra "banana" seria invertida para "ananab". 
//     Utilize a string abaixo como exemplo, depois troque por outras para 
//     verificar se seu algoritmo está funcionando corretamente.

let word = 'reviver';
const letters = word.split('');

let invertedWord = ''
for (let index = 0; index < letters.length; index += 1) {
  invertedWord += letters[letters.length - 1 - index]
}
console.log(invertedWord)
invertedWord = ''
console.log('')

////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////

// 3 - Considere o array de strings abaixo:

let array = ['java', 'javascript', 'python', 'html', 'css'];

// Escreva dois algoritmos: um que retorne a maior palavra deste array e outro que retorne a menor. 
// Considere o número de caracteres de cada palavra.

let charNumbers = 0
let biggestWord = ''

for (let indexArray = 0; indexArray < array.length; indexArray += 1) {
  charNumbers = array[indexArray].length
  
  for (let index = 0; index < array.length; index++) {
    if (charNumbers < array[index].length) {
      charNumbers = array[index].length
      biggestWord = array[index]
    }
  }
}

console.log(`A maior palavra da array é ${biggestWord} contendo ${charNumbers} caracteres`)
console.log('')

charNumbers = 0
biggestWord = ''

////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////

// 4 - Um número primo é aquele divisível apenas por 1 e por ele mesmo. 
//     Sabendo disso, escreva um algoritmo que retorne o maior número primo entre 0 e 50.
let higherNumber = 0
let primeNumbersArray = []

for (let number = 2; number <= 50; number += 1) {
  let isPrimeNumber = true
  
  for (let divider = 2; divider < number; divider += 1) {
    if (number % divider === 0) {
      isPrimeNumber = false
      break;
    }
  }
  if (isPrimeNumber) {
    primeNumbersArray.push(number)
  }
}

for (let index = 0; index < primeNumbersArray.length; index += 1) {
  higherNumber = primeNumbersArray[index]
  
  for (let index = 0; index < primeNumbersArray.length; index += 1) {
    if (higherNumber < primeNumbersArray[index]) {
      higherNumber = primeNumbersArray[index]
    }
  }
}

console.log(`O maior número primo entre 0 e 50 é ${higherNumber}`)
console.log('')
higherNumber = 0