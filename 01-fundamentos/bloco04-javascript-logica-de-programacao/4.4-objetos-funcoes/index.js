// Parte I - Objetos e For/In

// Usando o objeto abaixo, faça os exercícios a seguir:
let info = {
  personagem: 'Margarida',
  origem: 'Pato Donald',
  nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
};

////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////

// 1 - Imprima no console uma mensagem de boas-vindas para a personagem acima, 
// incluindo seu nome.

console.log(`Bem-vinda, ${info.personagem}`)
console.log('')

////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////

// 2 - Insira no objeto uma nova propriedade com o nome de chave 'recorrente' e o valor 'Sim' e, 
// em seguida, imprima o objeto no console.

info.recorrente = 'Sim'
console.log(info)
console.log('')

////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////

// 3 - Faça um for/in que mostre todas as chaves do objeto.

for (key in info) 
  console.log(key)

console.log('')

////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////

// 4 - Faça um novo for/in, mas agora mostre todos os valores das chaves do objeto.

for (key in info) 
  console.log(info[key])

console.log('')

////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////

// 5 - Agora, defina um segundo objeto com a mesma estrutura (as mesmas chaves) do primeiro e os seguintes valores: 
// 'Tio Patinhas', 'Christmas on Bear Mountain, Dell's Four Color Comics #178', 'O último MacPatinhas', 'Sim'. 
// Então, imprima os valores de cada objeto juntos de acordo com cada uma das chaves.

let infoTwo = {
  personagem: 'Tio Patinhas',
  origem: `Christmas on Bear Mountain, Dell's Four Color Comics #178`,
  nota: 'O último MacPatinhas',
};
infoTwo.recorrente = 'Sim'

console.log(`${info.personagem} e ${infoTwo.personagem}
${info.origem} e ${infoTwo.origem}
${info.nota} e ${infoTwo.nota}
Ambos recorrentes`)
console.log('')

////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////

// Usando o objeto abaixo, faça os exercícios a seguir:
let leitor = {
  nome: 'Julia',
  sobrenome: 'Pessoa',
  idade: 21,
  livrosFavoritos: [
    {
      titulo: 'O Pior Dia de Todos',
      autor: 'Daniela Kopsch',
      editora: 'Tordesilhas',
    },
  ],
};

////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////

// 6 - Acesse as chaves nome, sobrenome e titulo, que está dentro da chave livrosFavoritos, 
// e faça um console.log no seguinte formato: 
//    "O livro favorito de Julia Pessoa se chama 'O Pior Dia de Todos'".

console.log
(`O livro favorito de ${leitor.nome} ${leitor.sobrenome} se chama '${leitor.livrosFavoritos[0].titulo}'`)
console.log('')

////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////

// 7 - Adicione um novo livro favorito na chave livrosFavoritos, que é um array. 
// Atribua a esta chave um objeto contendo as seguintes informações:

leitor.livrosFavoritos.push({
  titulo: 'Harry Potter e o Prisioneiro de Azkaban',
  autor: 'JK Rowling',
  editora: 'Rocco',
}) 

console.log(leitor.livrosFavoritos)
console.log('')

////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////

// 8 - Acesse as chaves nome e livrosFavoritos e faça um console.log no seguinte formato: 
//    "Julia tem 2 livros favoritos".

console.log(`${leitor.nome} tem ${leitor.livrosFavoritos.length} livros favoritos`)
console.log('')

////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////

// Parte II - Funções

// 1 - Crie uma função que receba uma string e retorne true se for um palíndromo, ou false, se não for.

const verificaPalindrome = word => {
  const wordReverse = word.split('').reverse().join('')
  if (word === wordReverse) 
    return true
  
  return false
}

console.log(verificaPalindrome('arara'))
console.log(verificaPalindrome('desenvolvimento'))
console.log('')

////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////

// 2 - Crie uma função que receba um array de inteiros e retorne o índice do maior valor.

const intNumbers = [2, 3, 6, 7, 10, 1, -3, 2]

const biggestArrayNumber = intArray => {
  const higherNumber = Math.max(...intArray)

  for (let index = 0; index < intArray.length; index += 1) {
    if (higherNumber === intArray[index]) 
      return index
    
  }
}

console.log(biggestArrayNumber(intNumbers))
console.log('')

////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////

// 3 - Crie uma função que receba um array de inteiros e retorne o índice do menor valor.

const smallestArrayNumber = intArray => {
  const higherNumber = Math.min(...intArray)

  for (let index = 0; index < intArray.length; index += 1) {
    if (higherNumber === intArray[index]) 
      return index
    
  }
}

console.log(smallestArrayNumber(intNumbers))
console.log('')

////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////

// 4 - Crie uma função que receba um array de nomes e retorne o nome com a maior quantidade de caracteres.

const nomes = ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']

const biggestNameIndex = wordArray => {
  let nameNumber = nomes[0].length
  let name = nomes[0]
  
  wordArray.forEach(nome => {
    if (nameNumber < nome.length) {
      nameNumber = nome.length
      name = nome
    }
  })

  return name
}

console.log(biggestNameIndex(nomes))
console.log('')

////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////

// 5 - Crie uma função que receba um array de inteiros e retorne o inteiro que mais se repete.

const returnsHighestOccurrence = array => {
  const myObjects = []

  const getOccurrences = (array, value) => {
    const occurrences = array.reduce((acc, item) => value === item ? acc + 1 : acc, 0);
    return ({
      value: value,
      occurrences: occurrences,
    })
  }

  const addOccurrences = (array, objectArray) => {
    array.forEach(item => {
      objectArray.push(getOccurrences(array, item))
    })
  }
  addOccurrences(array, myObjects)

  let higherNumber = 0
  let currentValue = 0

  const checkHigherOccurrence = () => {
    for (let index = 0; index < myObjects.length; index += 1) {
      higherNumber = myObjects[index].occurrences
      currentValue = myObjects[index].value
  
      for(let index = 0; index < myObjects.length; index += 1) {
        if (higherNumber < myObjects[index].occurrences) {
          higherNumber = myObjects[index].occurrences
          currentValue = myObjects[index].value
        }
      }
    }
  }
  checkHigherOccurrence()

  return currentValue
}

console.log(returnsHighestOccurrence(intNumbers))
console.log('')