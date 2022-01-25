var numeroSecreto = parseInt(Math.random(0,11) * 10)
var tentativas = 3

while (tentativas > 0) {
  var chute = parseInt(prompt("Digite um número entre 0 e 10. Você tem " + tentativas + " tentativas."))

  if (numeroSecreto == chute) {
    alert("Acertou")
    break
  } else if (chute > numeroSecreto) {
    alert("O número secreto é menor. Você tem " + (tentativas - 1) + " tentativas")
    tentativas -= 1
  } else if (chute < numeroSecreto) {
    alert("O número secreto é maior. Você tem " + (tentativas - 1) + " tentativas")
    tentativas -= 1
  }  
}

if (chute != numeroSecreto) {
  alert("Infelizmente não acertou. O número secreto era " + numeroSecreto + ".")
}