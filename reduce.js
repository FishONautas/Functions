const numeros = [1, 2, 3, 4, 5];
const soma = numeros.reduce((acumulador, elemento, indice) => acumulador + elemento)

// o reduce cria um novo array apartir do array original.
// a função conta com três parametros, o acc o crr e o arr, respectivamente acumulador, elemento e indice
// o acumulador representa o valor acumulado até o momento, ele sempre inicia em 0
// o elemento representa o valor do elemento do array que está sendo percorrido
// indice representa a posição do array

// no caso, é indicado no reduce após os parametros que queremos o valor do acumulado somado ao valor do elemento
// para que isso seja o valor a retornar a nova variavel, no caso a variavel "soma"

// no primeiro percurso o reduce começa com um acumulado 0, e elemento 1, pois é o primeiro valor do array
// no segundo percurso o acumulado se torna 1 e elemento 2
// no terceiro percurso o acumulado se torna 3 e o elemento 3
// a cada percurso o valor acumulado se soma ao elemento e o resultado disso será o acumulado do proximo percurso
// o ciclo continuará até que os elementos do array acabem

console.log(soma)

// agora um exemplo mais real

const despesasMensais = [
    { descricao: 'Aluguel', valor: 1200 },
    { descricao: 'Eletricidade', valor: 150 },
    { descricao: 'Água', valor: 50 },
    { descricao: 'Supermercado', valor: 300 },
    // ... outros objetos de despesas
  ]
  
  // Usando reduce para calcular o total das despesas

  const totalDespesas = despesasMensais.reduce((acumulador, despesa) => acumulador + despesa.valor)
  
  console.log(`Total das despesas do mês: $${totalDespesas}`)