/*

  Projeto: O usuário deve inserir um valor, de 1 a X, que será
  comparado a um número aleatório.

  Conclusão:
  - Um input para o usuário inserir o valor;
  - Quantidade de vidas, do usuário;
    - Começa com 3;
    - Ganha +1 no acerto;
    - Máximo de 10 ♥♡ vidas;
  - Um número aleatório;
    - Ao errar, descrever se o número é maior ou menor;

*/
// Vidas & mensagens
$("main").appendChild(document.createElement("div"));
$("div").appendChild(document.createElement("p"));
$("main div p:nth-child(1)").innerText = "♥♥♥♡♡♡♡♡♡♡";

$("div").appendChild(document.createElement("p"));
$("main div p:nth-child(2)").innerText = "Bem vindo! Insira um número abaixo, por favor.";

// Input
$("main").appendChild(document.createElement("label"));

$("label").appendChild(document.createElement("input"));
$("input").setAttribute("type", "number");
$("input").setAttribute("min", "0");
$("input").setAttribute("step", "1");

$("main").appendChild(document.createElement("button"));
$("button").innerText = "Enviar!";

// Gera um número aleatório, minimo de ${min} e máximo de ${max}
function numAleatorio(min, max) {
  return parseInt(Math.random() * max + min);
}

// Declarações

var jogadorVidas = 3;
var jogadorScore = 0;
var jogoNumMin = 1;
var jogoNumMax = 10;
var jogoNumeroAleatorio = numAleatorio(jogoNumMin, jogoNumMax);

// Funções
// Escreve a quantidade de vidas do jogador
function imprimeCoracoes(num) {
  let string = "";
  for(let i = 0; i < 10; i++) {
    if(string.length < jogadorVidas) {
      string += "♥";
    } else {
      string += "♡";
    }
  }
  return string;
}

function acaoJogador() {
  let valorInput = parseInt($("input").value);
  switch(true) {
    case valorInput < 0:
      $("main div p:nth-child(2)").innerText = `Você escolheu um número menor que ${jogoNumMin}...`
      break;
    case valorInput > 10:
      $("main div p:nth-child(2)").innerText = `Você escolheu um número maior que ${jogoNumMax}...`
      break;
    default:
      if(valorInput === jogoNumeroAleatorio) {
        jogadorScore++;
        if(jogadorVidas < 10) {
          jogadorVidas++;
        }
        $("main div p:nth-child(1)").innerText = imprimeCoracoes(jogadorVidas);
        $("main div p:nth-child(2)").innerText = "Parabéns, você acertou! Tente novamente."
        jogoNumeroAleatorio = numAleatorio(jogoNumMin, jogoNumMax);
      } else {
        jogadorVidas--;
        $("main div p:nth-child(1)").innerText = imprimeCoracoes(jogadorVidas); 
        if(jogadorVidas <= 0) {
          $("input").disabled = true;
          $("button").disabled = true;
          $("input").setAttribute("type", "text");
          $("input").value = `Pontuação final: ${jogadorScore} pontos!`;
          $("main div p:nth-child(2)").innerText = "Fim do jogo! Aperte F5 para tentar novamente."
        } else {
          $("main div p:nth-child(2)").innerText = valorInput > jogoNumeroAleatorio ? "Você escolheu um número maior..." : "Você escolheu um número menor...";
        }
      }
  }
}

// Eventos

$("button").addEventListener("click", acaoJogador);
$("input").addEventListener("keydown", (evento) => {
  if(evento.key === "Enter") {
    acaoJogador();
  }
});