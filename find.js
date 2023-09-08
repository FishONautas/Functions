const numeros = [1, 2, 3, 4, 5]

const numeroEncontrado = numeros.find(function(elemento) { // isso poderia ser feito com arrow function
  return elemento > 3
})

console.log(numeroEncontrado) // Isso imprimirá 4
// O método find() retorna apenas o primeiro elemento que satisfaça a condição
// Se quisessemos todos elementos maior que 3 precisariamos usar o método filter()

// o método find pode ter três parametros (elemento, inidice e array) representando o elemento do array,
// sua posição no array e o array que ele participa, além de um parametro opcional o thisArg

// agora um exemplo mais complexo, usando o parametro elemento e o thisArg

const pessoa = {
    nome: "Alice",
    idade: 30,
    cumprimentar() {
      console.log(`Olá, meu nome é ${this.nome} e tenho ${this.idade} anos.`);
    }
  };
  
  const pessoas = [
    { nome: "Bob", idade: 25 },
    { nome: "Carol", idade: 35 },
    { nome: "Dave", idade: 28 }
  ]
  
  // Vamos usar o método find() para encontrar uma pessoa com idade maior que 30
  const pessoaEncontrada = pessoas.find(function(elemento) {
    return elemento.idade > 30;
  }, pessoa)

// na primeira fase do find ele encontra um objeto que cumpra o requisito, no caso a idade maior que 30
// quando ele encontra esse elemento, ele encaminha o elemento para a variavel "pessoa" e ali os valores são
// substituidos pelo elemento que o find encontrou
// o find() retorna o elemento que atende à condição, e você pode armazená-lo em uma variável para acessar seus valores posteriormente.
  
  pessoaEncontrada.cumprimentar()                           