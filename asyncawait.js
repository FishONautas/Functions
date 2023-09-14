async function obterPrevisaoDoTempo(lat, long, key) { // essa função é assincrona pois faz uma requisição (seja a um servidor, banco de dados ou na web)
                                                      // e queremos garantir que essa informação vai ser capturada antes de seguir

    try {
      // Fazendo o fetch dentro de um try para evitar erros
      const resposta = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${key}`)
  
      // Verifica se a solicitação foi bem-sucedida (código de status 200 ou 404)
      if (!resposta.ok) {
        throw new Error(`Houve um problema para requisitar a API`) // caso o nome da cidade seja invalido ou inexistente pois ela fará parte da string da URL
      }                                                            // ou mesmo a API esteja indisponível. Se nada anormal for detectado siga. Caso "throw" seja executado, pare o código aqui e vá para o próximo catch
  
      // Converte a resposta em formato JSON
      const dados = await resposta.json() // transformando a requisição feita em JSON e armazenando em uma variavel
  
      // Exibe os dados da previsão do tempo

      const tempkelvin = dados.main.temp -273.15
      const celsius = tempkelvin.toFixed(0)
      const cidade = dados.name

      console.log(`Agora está fazendo ${celsius}°C em ${cidade}`)

    } catch (erro) {
      console.error(`Ocorreu um erro: ${erro.message}`)
    }
  }
  
  // Chamando a função para obter a previsão do tempo para "São Paulo"
  obterPrevisaoDoTempo("-23.5489", "-46.6388", "34788c3b5ce6a444ebf466009d7c71c1")
  