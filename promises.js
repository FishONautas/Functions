// criação de uma promise

const minhaPromise = new Promise((resolve, reject) => { // criando uma promessa, armazenando ela em uma variavel (para ela ser reutilizavel) e declarando dois cenários, um onde o retorno é true e um onde é false
    const nome = 'Joao'
    if (nome === 'Joao') { // criando uma condição
      resolve(() => { // resolve aqui onde o cenário é verdadeiro
       console.log (`${nome}  está errado! é João`) // faça algo
      })
    } else { // se a condição não for verdadeira
      reject('Nome não encontrado') // atrelando o reject a condição falsa e dando uma instrução para essa ocasião
    }
  })
  
  minhaPromise.then(resultado => { // declarando a variavel que recebeu a promessa .then para ativar os retornos da promessa
      resultado() // chamando resultado como função para rodar tudo que está dentro do bloco da função
    })
    .catch(erro => { // caso aconteça um erro, ou no caso, a condição declarada acima não ser verdadeira, chamamos o reject
        console.log(erro)
      // Lógica para lidar com a Promise rejeitada (rejected)
    })

// criação de uma function que armazena uma promise

function dividirAssincronamente(dividendo, divisor) { // criando uma função, com dois parametros, no nosso caso faz sentido que sejam dois valores númericos
    return new Promise((resolve, reject) => {         // essa função retorna o que acontecer dentro da promessa
      if (divisor === 0) {                            // se o dividor for 0, gere um reject
        reject("Divisão por zero não é permitida.")   // reject informa que a divisão não é permitida
      } else {
        const resultado = dividendo / divisor         // caso não, os valores serão calculados, o dividendo pelo divisor
        resolve(resultado)                            // o resolve retorna o valor da variavel resultado
      }
    })
  }
  
  // Uso da função que retorna uma Promise
  dividirAssincronamente(10, 2)                       // chamando a função com os parametros
    .then(resultado => {                              // caso o resolve seja atendido, faça:
      console.log("Resultado:", resultado)
    })
    .catch(erro => {                                  // se o reject for atendido, faça:
      console.error("Erro:", erro)
    })                                              

      // uma função que armazena uma promise é muito comum na requisição de API como no exemplo abaixo:

    function fetchDataFromAPI() {
        return new Promise((resolve, reject) => {
          // Simule uma solicitação HTTP usando um atraso (usando setTimeout)
          setTimeout(() => {
            const sucesso = true // Simulando uma resposta bem-sucedida
            if (sucesso) {
              const dados = { nome: 'João', idade: 30 }
              resolve(dados) // Resolva a Promise com os dados da API
            } else {
              reject('Erro na solicitação') // Rejeite a Promise em caso de erro
            }
          }, 2000) // Simula uma resposta após 2 segundos
        })
      }
      
      // Uso da função que retorna uma Promise
      fetchDataFromAPI()
        .then(dadosDaAPI => {
          console.log('Dados da API:', dadosDaAPI)
        })
        .catch(erro => {
          console.error('Erro:', erro)
        })

        // resolvendo várias promises de uma vez

        const p1 = new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve('P1 ok!')
                reject('P1 not ok!')
            }, 2000)

        })

        const p2 = new Promise((resolve, reject) => {
            resolve('P2 ok!')
            reject('P2 not ok!')
             }
        )
        const p3 = new Promise((resolve, reject) => {
            resolve('P3 ok!')
            reject('P3 not ok!')
             }
        )

        const resolveAll = Promise.all([p1, p2, p3]).then((mensagens) => { // nesse caso, existe um timeOut para uma das promises, e ambas só são retornadas quando ambas forem respondidas, mesmo que uma demore mais que outras
            console.log(mensagens)                                         // isso não significa que todas retornaram "resolve", mas sim que ambas tem que ter um retorno para devolver o array de promises, mesmo que algumas
        })                                                                 // sejam falsas e outras verdadeiras. O ponto é que todas devem ser finalizadas para que o resolveAll seja executado.
      
        console.log('esse console log foi escrito após as promises no código, porém será executado antes, provando a forma assincrona de resolver promesas, mesmo declarada depois, esta linha foi executada antes')

        // nesse método, há uma corrida para que as promises sejam resolvidas, a primeira a retornar um resoltado (seja resolve ou reject) será a única promises executada

        const p4 = new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve('P4 ok!')
                reject('P4 not ok!')
            }, 2000)

        })

        const p5 = new Promise((resolve, reject) => {
            resolve('P5 ok!')
            reject('P5 not ok!')
             }
        )
        const p6 = new Promise((resolve, reject) => {
            resolve('P6 ok!')
            reject('P6 not ok!')
             }
        )

        const promissesRace = Promise.race([p4, p5, p6]).then((mensagensRace) => {
            console.log(mensagensRace)
        })