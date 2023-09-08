// Crie um elemento de botão
const botao = document.createElement("button")

// Defina o texto do botão
botao.textContent = "Clique em mim"

// Adicione um evento de clique ao botão
botao.addEventListener("click", (e) => { // sempre que houverem multiplas expressões dentro de uma função devemos usar o {}
  let value = e.target.innerText
  console.log(value)
  alert("Você clicou no botão!")
    }
)


// Obtenha o elemento pai onde você deseja inserir o botão (por exemplo, o corpo do documento)
const corpoDoDocumento = document.body

// Adicione o botão ao corpo do documento
corpoDoDocumento.appendChild(botao)