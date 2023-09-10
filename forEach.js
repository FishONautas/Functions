const numeros = ['1', '2', '3', '4', '5']

numeros.forEach((numbers) => {
    if (numbers % 2 !== 0){
        console.log(`${numbers} são impares`)
    }

})

// o método forEach percorre cada elemento de um array, e então podemos definir o que fazer assim que cada elemento for testado
// nesse caso, criamos uma condição que é: caso o elemento testado seja impar, faça um console.log dele
// o forEach passará cada elemento através do nosso parametro "number" que foi usado posteriormente no if para testar a condição

class Account {
    constructor() {
      this.users = [
        { nome: "João Victor", idade: 21, sexo: 'M', id: 1 },
        { nome: "Gizelly Valeriano", idade: 20, sexo: 'F', id: 2 },
      ]
    }
}
  
const novaConta = new Account()
novaConta.users.push({nome: "Maria", idade: 25, sexo: 'F', id: 3})

novaConta.users.forEach((user) => 
    console.log(`Nome: ${user.nome}, Idade: ${user.idade}, Sexo: ${user.sexo}, ID: ${user.id}`)
)

// nesse caso o uso foi um pouco mais complexo
// temos uma classe, com um construtor de objetos, esse construtor não solicita parametros pois estamos armazenando um array de objetos dentro dele
// acontece que o construtor recebe um atributo que é "users", e users é um array de objetos dentro do construtor, ou seja, o costrutor
// não está necessáriamente criando objetos a ele, mas sim armazenando um array.

// criamos uma nova variavel para a conta
// adicionamos ela ao array users e passamos um objeto para ela

// através desse objeto percorremos o array onde ele se encontra com novaConta.users.forEach
// dessa forma o forEach usará essa variavel para encontrar seu array e percorrer todos os objetos dentro dele.