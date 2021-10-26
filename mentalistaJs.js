var numeroSecreto = parseInt(Math.random() * 11)
var contador = 0

function gerarNumero() {
  numeroSecreto = parseInt(Math.random() * 11)
}

function Chutar() {
  contador += 1
  elementoResultado = document.getElementById('resultado')
  var chute = parseInt(document.getElementById('valor').value) //pega o valor e não a tag
  if (chute == numeroSecreto) {
    elementoResultado.innerHTML = 'Você acertou!! Tentativas: ' + contador
    elementoResultado.style.color = '#00ff00'
    document.getElementById('botao').disabled = true
  } else if (chute > 10 || chute < 0) {
    document.getElementById('botao').disabled = true
    elementoResultado.innerHTML = `Você deve digitar um número entre 0 e 10, reinicie o jogo.`
    elementoResultado.style.color = 'red'
  } else {
    elementoResultado.innerHTML = `Você errou, você possui mais ${
      3 - contador
    } tentativas`
    document.getElementById('valor').value = ''

    if (chute > numeroSecreto) {
      elementoResultado.innerHTML = `Tente um número menor, você possui mais ${
        3 - contador
      } tentativas`
      document.getElementById('valor').value = ''
    } else {
      elementoResultado.innerHTML = `Tente um número maior, você possui mais ${
        3 - contador
      } tentativas`
      document.getElementById('valor').value = ''
    }

    if (contador > 2) {
      elementoResultado.innerHTML = `Você perdeu, reincie o jogo. Você tentou ${contador} vezes`
      elementoResultado.style.color = '#e4605e'
      document.getElementById('botao').disabled = true
      document.getElementById('valor').value = ''
    }
  }
}

function Reiniciar() {
  contador = 0
  document.getElementById('botao').disabled = false
  elementoResultado.innerHTML = ``
  elementoResultado.style.color = 'white'
  gerarNumero()
  document.getElementById('valor').value = ''
}
