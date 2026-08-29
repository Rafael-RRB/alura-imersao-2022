/*

    Projeto: O usuário insere um valor em reais, que é convertido em dólares
    ao clicar em um botão.

    Futuro: Converter distância entre dois planetas em anos-luz;
    Converter para Euro, Bitcoin;

    Condições de conclusão:
    - Um input para inserir valor, em reais;
    - Resultados, em outras moedas;

    Falhas:
    - Não há como escolher qual o tipo de moeda;
*/
const CE = document.createElement.bind(document);

$("main").appendChild(CE("label"));
$("label").innerHTML = "Insira um valor, em R$:";
$("label").appendChild(CE("input"));
$("label").appendChild(CE("button"))

$("input").setAttribute("type", "number");
$("input").setAttribute("min", "0.00");
$("input").setAttribute("step", "1.00");


$("button").innerHTML = "Enviar";

$("main").appendChild(CE("label"));
$("label:nth-child(2)").innerHTML = "O valor inserido, em $:";
$("label:nth-child(2)").appendChild(CE("input"));

$("main").appendChild(CE("label"));
$("label:nth-child(3)").innerHTML = "O valor inserido, em €:";
$("label:nth-child(3)").appendChild(CE("input"));

$("main").appendChild(CE("label"));
$("label:nth-child(4)").innerHTML = "O valor inserido, em 円:";
$("label:nth-child(4)").appendChild(CE("input"));

$("main").appendChild(CE("label"));
$("label:nth-child(5)").innerHTML = "O valor inserido, em 元:";
$("label:nth-child(5)").appendChild(CE("input"));

function enviaValor() {
  let valorReais = parseFloat($("input").value);

  $("label:nth-child(2) input").value = valorReais / 5;
  $("label:nth-child(3) input").value = valorReais / 5;
  $("label:nth-child(4) input").value = valorReais * 27.5;
  $("label:nth-child(5) input").value = valorReais * 1.3;

  let scrollLabel = document.querySelector("label:nth-child(2)");

  window.scrollTo({
    top: (scrollLabel.offsetTop - parseFloat(getComputedStyle(scrollLabel).marginTop.replace("px", ""))),
    left: 0,
    behavior: "smooth"
  });
}

$("button").addEventListener("click", enviaValor);
$("input").addEventListener("keydown", evento => {
  if (evento.key === "Enter") {
    enviaValor();
  }
});