const numeros = [1, 2, 3, 4, 5];

const quadrados = numeros.map((numero) => numero * numero)
// o map é usado para retornar um array de forma modificada
// usamos um array como referencia, e no map podemos criar um novo array baseado no array original
// porém modificado conforme indicarmos no parametro, nesse caso estamos retornando os valores elevados a 2.

console.log(quadrados)

// um exemplo mais complexo

const listaDeCompras = [
    { nome: 'Maçãs', quantidade: 5 },
    { nome: 'Bananas', quantidade: 3 },
    { nome: 'Leite', quantidade: 2 },
  ];
  
  const listaFormatada = listaDeCompras.map((item) => { // é incomum que o map receba mais de uma instrução por bloco, contudo, caso isso aconteça, deve ser bem planejado
  return `${item.quantidade} ${item.nome}`              // pois o ultimo bloco deverá ser um "return" seguido de alguma instrução para enviar valores para o novo array
  })
  // aqui o array continua sendo um array

  const listaFomatadaString = listaFormatada.join(' ')
  // aqui o array será uma string completa

  // lembrando que o parametro indicado, no caso "item" apenas representa o acumulador, ou seja, o valor atual
  // do array, ele se atualizará sempre que passar para o proximo elemento ou objeto.
  // no primeiro percurso, item representa o primeiro objeto, logo item.quantidade será 5 e item.quantidade será 5
  // no fim transformamos esse array em uma string através do join
  
  console.log(`Lista de Compras: ${listaFomatadaString}`)