/*

  Projeto: Scoreboard!

  Conclusão:
    + Uma tabela (scoreboard), que contém o seguinte:
      + Jogadores/times:
        + Nome;
        + Vitórias;
        + Empates;
        + Derrotas;
    - CSS da tabela;
    + Botões para adicionar, individualmente:
    + Vitórias;
    + Empates;
    + Derrotas;
    + funcionais;
    
    + Usuário define os seguintes:
      + Nome do jogo;
      + Se os competidores são jogadores ou times;
      + Quantidade de competidores;
      + Nome dos competidores;
    
    + Competição acaba quando:
      + Um dos jogadores possui uma quantidade de vitórias maior que:
        + (numJogadores / 2).arredonda * ((todosVitorias + todosEmpates + TodosDerrotas) / 2) / numJogadores
*/

/* Funções */

  // Capitaliza as palavras passadas como parâmetro (ex.: lEAGue OF leGENDs => League Of Legends) 
  function formataTexto(string) {
    string = string.toLowerCase().split(" ");
    for(let i = 0; i < string.length; i++) {
      string[i] = string[i].split("");
      string[i][0] = string[i][0].toUpperCase();
      string[i] = string[i].join("");
    }
    return string.join(" ");
  }
  // Atualiza os números da tabela, ao ser invocado
  function atualizaTabela() {
    for(let i = 0; i < quantCompetidores; i++) {
      let tabelaCorpo = $$("main table tbody tr")[i];
      tabelaCorpo.querySelectorAll("td")[0].innerText = listaCompetidores._lista[i]._nome;
      tabelaCorpo.querySelectorAll("td")[1].innerText = listaCompetidores._lista[i]._vitorias;
      tabelaCorpo.querySelectorAll("td")[2].innerText = listaCompetidores._lista[i]._empates;
      tabelaCorpo.querySelectorAll("td")[3].innerText = listaCompetidores._lista[i]._derrotas;
    }
    atualizaLista(listaCompetidores);

    let tabelaRodape = $$("main table tfoot tr td");
    tabelaRodape[1].innerText = listaCompetidores._totalVitorias;
    tabelaRodape[2].innerText = listaCompetidores._totalEmpates;
    tabelaRodape[3].innerText = listaCompetidores._totalDerrotas;

    condicaoVitoria();
  }
  function atualizaLista(variavel) {
    variavel._totalVitorias = (() => {
      let soma = 0;
      for(let i = 0; i < variavel._lista.length; i++) {
        soma += variavel._lista[i]._vitorias;
      }
      return soma;
    })();
    variavel._totalEmpates = (() => {
      let soma = 0;
      for(let i = 0; i < variavel._lista.length; i++) {
        soma += variavel._lista[i]._empates;
      }
      return soma;
    })();
    variavel._totalDerrotas = (() => {
      let soma = 0;
      for(let i = 0; i < variavel._lista.length; i++) {
        soma += variavel._lista[i]._derrotas;
      }
      return soma;
    })();
    variavel._totalPartidas = (variavel._totalVitorias + variavel._totalEmpates + variavel._totalDerrotas) / 2;
  }
  // Soma fatorial
  function somaFatorial(num) {
    let sum = 0;
    for(let i = 1; i <= num; i++) {
        sum += i;
    }
    return sum;
  }

  // Vê se algum dos jogadores alcançou a condição de vitória
  function condicaoVitoria() {
    let vencedor = `A competição ainda não acabou! nenhum dos ${tipoCompetidores} vencedor ainda.`;
    for(let i = 0; i < listaCompetidores._lista.length; i++) {
      if(listaCompetidores._lista[i]._vitorias > quantCompetidores - 2 &&
      listaCompetidores._totalPartidas % somaFatorial(quantCompetidores - 1) === 0) {
        $$("button").forEach((valor, index, array) => {
          array[index].setAttribute("disabled", "");
        });
        vencedor = listaCompetidores._lista[i];
        let reescrever = "";
        if (tipoCompetidores === "times") {
          reescrever = "O time";
        } else {
          reescrever = "O(A) jogador(a)";
        }
        $("main table tfoot tr td:nth-of-type(5)").innerText = `Fim da competição! ${reescrever} ${vencedor._nome} venceu!!!`
      }
    }
    console.log(`Vencedor: ${vencedor._nome}`);

    return vencedor;
  }

/* Constant, let & var */
let jogoEscolhido = prompt("Esta competição será de que jogo?");
while(jogoEscolhido === "") {
  jogoEscolhido = prompt("Você não respondeu! Por favor, insira o nome do jogo.");
}
jogoEscolhido = formataTexto(jogoEscolhido);

let tipoCompetidores = prompt("Os competidores serão times ou jogadores?");
while(!["time", "times","jogador", "jogadora", "jogadores"].includes(tipoCompetidores.toLowerCase())) {
  tipoCompetidores = prompt("Não entendi... os competidores serão times ou jogadores?");
}
if(["time", "times"].includes(tipoCompetidores)) {
  tipoCompetidores = "times";
} else {
  tipoCompetidores = "jogadores";
}

let quantCompetidores = prompt("Quantos " + tipoCompetidores + " estarão presentes?");
while(isNaN(quantCompetidores) || quantCompetidores < 2) {
  quantCompetidores = prompt("Por favor, insira uma quantidade válida de competidores.")
}
quantCompetidores = parseInt(quantCompetidores);

class Competidor {
  constructor(nome) {
    this._nome = nome;
    this._vitorias = 0;
    this._empates = 0;
    this._derrotas = 0;
  }
}
class ListaCompetidores {
  constructor(competidor) {
    this._lista = [];
    this._totalVitorias = (() => {
      let soma = 0;
      for(let i = 0; i < this._lista.length; i++) {
        soma += this._lista[i]._vitorias;
      }
      return soma;
    })();
    this._totalEmpates = (() => {
      let soma = 0;
      for(let i = 0; i < this._lista.length; i++) {
        soma += this._lista[i]._empates;
      }
      return soma;
    })();
    this._totalDerrotas = (() => {
      let soma = 0;
      for(let i = 0; i < this._lista.length; i++) {
        soma += this._lista[i]._derrotas;
      }
      return soma;
    })();
    this._totalPartidas = (this._totalVitorias + this._totalEmpates + this._totalDerrotas) / 2;
  }

  adicionaCompetidor(nome) {
    this._lista.push(new Competidor(nome))
  }
}

let listaCompetidores = new ListaCompetidores();
for(let i = 0; i < quantCompetidores; i++) {
  let nomeCompetidor = prompt("Qual o nome do competidor nº " + (i + 1) + "?");
  while(nomeCompetidor === "") {
    nomeCompetidor = prompt("Por favor, insira o nome do competidor nº " + (i + 1) + "...");
  }
  listaCompetidores.adicionaCompetidor(nomeCompetidor);
}

// Construção do HTML
$("main").appendChild(create("table"));
  
  $("main table").appendChild(create("thead"));
  
    $("main table thead").appendChild(create("tr"));

      $("main table thead tr").appendChild(create("th"));

        $("main table thead tr th").innerText = jogoEscolhido;
        $("main table thead tr th").setAttribute("colspan", "7");


    $("main table thead").appendChild(create("tr"));
    
      for(let i = 0; i < 5; i++) {
        $("main table thead tr:nth-of-type(2)").appendChild(create("th"));
      }
      $$("main table thead tr:nth-of-type(2) th").forEach((valor, index, array) => {
        switch(true) {
          case index === 0:
            array[index].innerText = "Competidor";
            break;
          case index === 1:
            array[index].innerText = "Vitórias";
            break;
          case index === 2:
            array[index].innerText = "Empates";
            break;
          case index === 3:
            array[index].innerText = "Derrotas";
            break;
          case index === 4:
            array[index].innerText = "Resultados";
            array[index].setAttribute("colspan", "3");
            break;
        }
      });
  
  $("main table").appendChild(create("tbody"));
    for(let i = 0; i < quantCompetidores; i++) {
      let i2 = i;
      $("main table tbody").appendChild(create("tr"));
      for(let i = 0; i < 7; i++) {
        $$("main table tbody tr")[i2].appendChild(create("td"));
      }
      $$("main table tbody tr")[i].querySelectorAll("td")[4].appendChild(create("button"));
      $$("main table tbody tr")[i].querySelectorAll("td")[4].querySelector("button").innerText = "Ganhou!";
      $$("main table tbody tr")[i].querySelectorAll("td")[5].appendChild(create("button"));
      $$("main table tbody tr")[i].querySelectorAll("td")[5].querySelector("button").innerText = "Empate?!";
      $$("main table tbody tr")[i].querySelectorAll("td")[6].appendChild(create("button"));
      $$("main table tbody tr")[i].querySelectorAll("td")[6].querySelector("button").innerText = "Derrota...";
    }

  $("main table").appendChild(create("tfoot"));    
    $("main table tfoot").appendChild(create("tr"));
      for(let i = 0; i < 5; i++) {
        $("main table tfoot tr").appendChild(create("td"));
      }
      $$("main table tfoot tr td").forEach((valor, index, array) => {
        switch(true) {
          case index === 0:
            array[index].innerText = "Totais:";
            break;
          case index === 1:
            array[index].innerText = 0;
            break;
          case index === 2:
            array[index].innerText = 0;
            break;
          case index === 3:
            array[index].innerText = 0;
            break;
          case index === 4:
            array[index].innerText = "A competição ainda não acabou!";
            array[index].setAttribute("colspan", "3");
            break;
        }
      });
  atualizaTabela();

// Scripts

/* Event listeners */

  // Botões de vitória
  $$("main table tbody tr td:nth-child(5) button").forEach((valor, index, array) => {
    array[index].addEventListener("click", () => {
        listaCompetidores._lista[index]._vitorias++;
        atualizaTabela();
    });
  });
  
  // Botões de empate
  $$("main table tbody tr td:nth-child(6) button").forEach((valor, index, array) => {
    array[index].addEventListener("click", () => {
        listaCompetidores._lista[index]._empates++;
        atualizaTabela();
    });
  });

  // Botões de derrota
  $$("main table tbody tr td:nth-child(7) button").forEach((valor, index, array) => {
    array[index].addEventListener("click", () => {
        listaCompetidores._lista[index]._derrotas++;
        atualizaTabela();
    });
  });