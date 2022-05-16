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

let word = 'banana';
const wordArray = word.split('');

let invertedWord = ''
for (let index = 0; index < wordArray.length; index += 1) {
  invertedWord += wordArray[wordArray.length - 1 - index]
}
console.log(invertedWord)
invertedWord = ''