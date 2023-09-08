// A função sort() serve para ordenar em ordem crescente ou alfabetica os arrays desordenados
// Vamos abaixo a partir da variavel "Numeros" fazer ordenação em ordem crescente e decrescente usando a função sort()

const numeros = [10, 5, 8, 1, 7]
const numerosOrdenados = numeros.slice().sort((a, b) => a - b)
// Criando uma nova variavel, que receberá o valor da variavel "números" para realizar a ordenação em ordem crescente

console.log(numerosOrdenados) // Array ordenado
console.log(numeros) // Array original ainda não alterado

function OrdenaNumeros(){
   const mostra = numeros.sort((a, b) => a + b) 
   console.log(mostra)
    }

console.log(OrdenaNumeros())

// Criando uma função para o mesmo propósito, agora em ordem decrescente
// "a" e "b" são convencionalmente usados como parametro para a função sort() pois são elementos de comparação
// respectivamente um representa um elemento do array e o outro representará outro elemento do array
// comparando cada elemento ele consegue retornar verdadeiro ou falso e fazer a ordenação

// Agora um exemplo mais real

const pessoas = [
    { nome: 'Alice', idade: 25 },
    { nome: 'Bob', idade: 30 },
    { nome: 'Carol', idade: 20 },
  ]
  
  pessoas.sort((a, b) => a.idade - b.idade)
  console.log(pessoas)

// Organizando o array por idade, mas também poderia ser por ordem alfabetica ou qualquer outro elemento 
// que seja comparável.
// Nesse caso usamos a propria variavel e organizamos ela, sem criar uma nova ou uma função para tal

