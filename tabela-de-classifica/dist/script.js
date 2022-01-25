console.clear()
var paulo = {
  nome:"Paulo",
  vitorias: 0,
  empates: 0,
  derrotas:0,
  pontos: 0,
}

var rafa = {
  nome:"Rafa",
  vitorias: 0,
  empates: 0,
  derrotas: 0,
  pontos: 0,  
}


var jogadores = [paulo, rafa]
exibirJogadoresNaTela(jogadores)
zerarPlacar(jogadores)

//--- FUNÇÕES

function adicionarJogador(){
  nomeJogador = prompt("Escreva o nome do novo jogador:")
  var novoJogador = {
    nome: nomeJogador,
    vitorias: 0,
    empates: 0,
    derrotas: 0,
    pontos: 0,  
  }
  jogadores.push(novoJogador)
  console.log("Você adicionou " + novoJogador.nome + " para a Tabela de classificação")
  exibirJogadoresNaTela(jogadores)
}

function removerJogador(i){
  var jogador = jogadores[i]
  jogadores.splice(i,1)
  console.log("Você removeu " + jogador.nome + " da Tabela de classificação")
  exibirJogadoresNaTela(jogadores)
}

function exibirJogadoresNaTela(jogadores) {
  var html = ""
  for (i = 0; i < jogadores.length; i++){
    jogadores[i].pontos = calculaPontos(jogadores[i])
    html += "<tr><td><button class='b4' onClick='removerJogador(" + i + ")'>X</button></td>"
    html += "<td>" + jogadores[i].nome + "</td>"
    html += "<td>" + jogadores[i].vitorias + "</td>"
    html += "<td>" + jogadores[i].empates + "</td>"
    html += "<td>" + jogadores[i].derrotas + "</td>"
    html += "<td>" + jogadores[i].pontos + "</td>"
    html += "<td><button class='b1' onClick='adicionarVitoria(" + i + ")'>Vitória</button></td>"
    html += "<td><button class='b2' onClick='adicionarEmpate(" + i + ")'>Empate</button></td>"
    html += "<td><button class='b3' onClick='adicionarDerrota(" + i + ")'>Derrota</button></td></tr>"    
  }
  var tabelaJogadores = document.getElementById("tabelaJogadores")
  tabelaJogadores.innerHTML = html
}

function calculaPontos(jogador){
  var pontos = (jogador.vitorias * 3) + jogador.empates
  return pontos
}

function adicionarVitoria(i){
  var jogador = jogadores[i]
  jogador.vitorias++
  exibirJogadoresNaTela(jogadores)
  console.log("Vitória adicionada para " + jogador.nome)
}

function adicionarEmpate(i){
  var jogador = jogadores[i]
  jogador.empates++
  exibirJogadoresNaTela(jogadores)
  console.log("Empate adicionado para " + jogador.nome)
}

function adicionarDerrota(i){
  var jogador = jogadores[i]
  jogador.derrotas++
  exibirJogadoresNaTela(jogadores)
  console.log("Derrota adicionada para " + jogador.nome)
}

function zerarPlacar(){
  for (i = 0; i < jogadores.length; i++){
    jogadores[i].vitorias = 0
    jogadores[i].empates = 0
    jogadores[i].derrotas = 0
    jogadores[i].pontos = 0
  }
  exibirJogadoresNaTela(jogadores)
}