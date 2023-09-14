class Escola {
    constructor (nome, idade,){
        this.nome = nome
        this.idade = idade
    }
}

class Estudante extends Escola {

    constructor (nome, idade, ra, nota){ 
        super(nome,idade)
        this.ra = ra
        this.nota = nota
        this.matricula = true    // atributos booleanos não precisam ser declarados no construtor
        this.colegio = undefined // este campo será definido pelo método set, a vantagem disso se dá na flexibilidade da alteração, diferente da definição por parametros que não podem
                                 // ser alteradas após a criação do objeto. Usando o set, em diferentes partes do código conseguiremos alterar o valor desse atributo para cada variável
    }

    desligarMatricula(){
        this.matricula = false
        this.colegio = 'Sem colégio'
    }

    set setColegio(colegio){
        this.colegio = colegio
        this.matricula = true
    }

    fazProva(){
        if (this.nota >6 && this.nota <= 10){
            console.log('O aluno ' + this.nome + ' foi aprovado')
        }
        else if (this.nota >=0 && this.nota <= 5){
            console.log('O aluno foi reprovado')
        }
        else{
            console.log('Nota inválida')
        }
    }
}

class Colaboradores extends Escola {
    constructor (nome, idade, salario){
        super(nome, idade)
        this.salario = 'R$' + salario
    }
}

class Professor extends Colaboradores {
    constructor (nome, idade, salario, formacao){
        super(nome, idade, salario)
        this.formacao = formacao
    }

    fazerPagamento(){
        console.log('O Professor(a) ' + this.nome + ' lessiona a matéria ' + this.formacao + ' e recebeu R$ ' + this.salario + ' de salário')
    }

}

class Cordenador extends Colaboradores {
    constructor (nome, idade, salario, area){
        super(nome,idade,salario)
        this.area = area
    }

    apresentarCordenador(){
        console.log('O ' + this.nome + ' é coordenador da área: ' + this. area)
    }

}


const Cordenadores = []
const Joao = new Cordenador('João', 21, '5000', 'Financeiro')
Cordenadores.push(Joao)

// criando diversos objetos de uma vez

const Alunos = []

const estudantesData = [
    { nome: 'Helio', idade: 45, ra: '56531', nota: 9 },
    { nome: 'Maria', idade: 20, ra: '12345', nota: 8 },
]

estudantesData.forEach((data) => {
    const aluno = new Estudante(data.nome, data.idade, data.ra, data.nota)
    if (aluno.nome == 'Helio'){
        aluno.setColegio = 'Etesp'
    }
    else {
    aluno.setColegio = 'Etec'
    }
    Alunos.push(aluno)
   
})


const professoresData = [
    { nome: 'Luciano', idade: 41, salario: 3000, formacao: 'português' },
    { nome: 'Ana', idade: 35, salario: 2500, formacao: 'história' },
]

const Professores = professoresData.map((data) => {
    return new Professor(data.nome, data.idade, data.salario, data.formacao)
    }
)

Alunos[1].setColegio = 'Etec Parque da Juventude' // podemos alterar o atributo de um objeto o definindo pela posição do array
                                                  // caso não soubermos qual é a posição do objeto que queremos encontrar podemos rastrea-lo da seguinte forma:

                                                     /* const nomeAlunoProcurado = 'Luciano Fernando Silva'

                                                     const indiceAluno = Alunos.findIndex((aluno) => aluno.nome === nomeAlunoProcurado)

                                                     if (indiceAluno !== -1) {
                                                     console.log(`O aluno ${nomeAlunoProcurado} está na posição ${indiceAluno} do array.`);
                                                      } 

                                                     else {
                                                     console.log(`O aluno ${nomeAlunoProcurado} não foi encontrado no array.`);
                                                      }
                                                      
                                                     O método findIndex percorre o array Alunos e retorna o índice do primeiro elemento que satisfaz
                                                     a condição especificada no callback. Se o aluno for encontrado, você obterá o índice onde ele está no array
                                                     caso contrário, receberá -1 como resultado. */

console.log(Cordenadores)
console.log(Alunos)
console.log(Professores)

