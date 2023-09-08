// O método some() em JavaScript é uma função de array que verifica se pelo menos um elemento em um array
// satisfaz uma determinada condição.
// Ele retorna true se pelo menos um elemento passar no teste especificado pela função de callback, caso contrário, retorna false.

const numeros = [10, 20, 30, 40, 50];

// Verifica se pelo menos um elemento é maior que 35
const numeroVerificado = numeros.some((elemento) => elemento > 35)

console.log(numeroVerificados)
// no caso, a variavel "resultado" retornará "true", pois a condição foi atendida

// Abaixo um exemplo mais palpavel para testar uma condição dentro do array

const produtos = [
    { nome: 'Camiseta', preco: 25 },
    { nome: 'Calça', preco: 40 },
    { nome: 'Tênis', preco: 60 },
    { nome: 'Meias', preco: 10 },
  ]

  const resultado = produtos.some((produto) => produto.preco < 50)
  
  console.log(resultado)

  if (resultado == true){
    console.log("Tem produto em promoção")
  }
  else{
    console.log("As coisas estão caras")
  }