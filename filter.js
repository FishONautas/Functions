const numeros = [1, 2, 3, 4, 5]

const numerosPares = numeros.filter((elemento) =>
   elemento % 2 === 0
)

console.log(numerosPares)

// o filter trabalha de modo muito parecido com o find, porém ao inves de retornar apenas o primeiro elemento do array
// que satisfaça a condição, o filter retorna todos os elementos que satisfaçam a condição, em forma de array.

// um exemplo um pouco mais real

const pessoas = [
    { nome: "Alice", idade: 25 },
    { nome: "Bob", idade: 17 },
    { nome: "Carol", idade: 32 },
    { nome: "David", idade: 19 },
    { nome: "Eve", idade: 15 }
  ]
  
  // Usando o método filter para encontrar as pessoas maiores de idade
  const pessoasMaioresDeIdade = pessoas.filter((pessoa) =>
    pessoa.idade >= 18
  )
  
  console.log(pessoasMaioresDeIdade)
  