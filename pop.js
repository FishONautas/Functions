const numeros = [1, 2, 3, 4, 5]
const ultimoNumero = numeros.pop()

// o pop serve para enviar o ultimo elemento de um array para uma nova variavel, é bem simples

console.log(ultimoNumero)
console.log(numeros)

// um exemplo mais real

const listaDeTarefas = ["Lavar a louça", "Fazer compras", "Estudar JavaScript"];

// Função para remover a última tarefa da lista.

function removerUltimaTarefa() {

  if (listaDeTarefas.length > 0) {
    const tarefaRemovida = listaDeTarefas.pop()
    console.log(`Tarefa removida: ${tarefaRemovida}`)
  } else {
    console.log("A lista de tarefas está vazia.")
  }
}

removerUltimaTarefa()
removerUltimaTarefa()

console.log(listaDeTarefas)