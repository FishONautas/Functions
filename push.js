const numeros = [1, 2, 3]
numeros.push(4, 5)

// o push adiciona elementos a um array

console.log(numeros)

// um exemplo mais real

const listaDeTarefas = []

// Função para adicionar uma nova tarefa à lista.
function adicionarTarefa(tarefa) {
  listaDeTarefas.push(tarefa)
}

// Adicionando algumas tarefas à lista
adicionarTarefa('Lavar a louça')
adicionarTarefa('Fazer compras')
adicionarTarefa('Estudar JavaScript')

console.log(listaDeTarefas)