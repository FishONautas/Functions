// Crie um elemento de botão
const botao = document.createElement("button")

// Defina o texto do botão
botao.textContent = "Clique em mim"

// Adicione um evento de clique ao botão
botao.addEventListener("click", (e) => { // sempre que houverem multiplas expressões dentro de uma função devemos usar o {}
  let value = e.target.innerText         // o addEventListener pode receber dois parametros, o primeiro indicando a ação
  console.log(value)                     // que apesar de ser ums String ela conta como uma ação de parametro, poderia ser
  alert("Você clicou no botão!")         // "keydown" ou "keyup" por exemplo
    }                                    // o segundo parametro é opcional para quando quisermos captar alguma informação durante o evento
)                                        // no caso queremos capturar o texto do botão que foi clicado, por isso usamos o segundo parametro


// Obtenha o elemento pai onde você deseja inserir o botão (por exemplo, o corpo do documento)
const corpoDoDocumento = document.body

// Adicione o botão ao corpo do documento
corpoDoDocumento.appendChild(botao)