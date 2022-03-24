/*selecionando conteúdo com getElementById e modificando conteúdo com innerHTML*/
function alteraTitulo() {
  document.getElementById('titulo').innerHTML =
    'Estudo de funções básicas de JS'
}

/*Selecionar conteúdo com querySelector */
function alteraH3() {
  document.querySelector('#textoH3').innerHTML = 'Novo texto para H3'
}

/*modificar estilo da tag adicionando uma classe css */
function alteraTextoP() {
  document.querySelector('#textoP').classList.add('textoCor')
}

/* remover classe css */
function restauraTextoP() {
  document.querySelector('#textoP').classList.remove('textoCor')
}

/*apagar o texto utilizando a função display*/
function apagaTextoP() {
  document.querySelector('#textoP').style.display = 'none'
}

/*exibir o texto utilizando a função display inherit */
function mostrarTextoP() {
  document.querySelector('#textoP').style.display = 'inherit'
}

/*exibir um alerta*/
function alerta() {
  alert('Exibindo um alerta')
}

/*fecha a janela*/
function fecharJanela() {
  window.close()
}

/*passando o mouse sobre o item*/
function passarMouse() {
  document.querySelector('#textoMouse').innerHTML = 'Seu mouse está aqui!'
  document.querySelector('#textoMouse').classList.add('passarMouse')
}

function tirarMouse() {
  document.querySelector('#textoMouse').innerHTML = 'Você passou o mouse aqui!'
  document.querySelector('#textoMouse').classList.remove('passarMouse')
}

/* Exemplos com data e hora */
function verData() {
  let dt = new Date()
  let data = document.querySelector('#data')
  data.innerHTML =
    dt.toLocaleDateString('pt-BR', {
      day: '2-digit',
      month: 'long',
      year: 'numeric'
    }) +
    ' ' +
    dt.toLocaleTimeString('pt-BR')
}
