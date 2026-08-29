const main = $("main");
//↴→
main.appendChild(create("div"));
  $$("main>div")[0].appendChild(create("img"));
    $$("main>div")[0].querySelector("img").setAttribute("src", "img/profile.svg");
  $$("main>div")[0].appendChild(create("div"));
    $$("main>div")[0].querySelector("div").appendChild(create("h2"));
      $$("main>div")[0].querySelector("div>h2").innerText = "Alura: Imersão Dev 2022";
    $$("main>div")[0].querySelector("div").appendChild(create("p"));
      $$("main>div")[0].querySelector("div>p").innerText = "Rafael R.B.";

main.appendChild(create("div"));
  $$("main>div")[1].appendChild(create("ul"));
    for(let i = 0; i < 7; i++) {
      $$("main>div")[1].querySelector("ul").appendChild(create("li"));
        $$("main>div")[1].querySelectorAll("ul>li")[i].appendChild(create("a"));
          $$("main>div")[1].querySelectorAll("ul>li>a")[i].appendChild(create("img"));
          $$("main>div")[1].querySelectorAll("ul>li>a")[i].appendChild(create("h2"));
          $$("main>div")[1].querySelectorAll("ul>li>a")[i].appendChild(create("img"));
          $$("main>div")[1].querySelectorAll("ul>li>a")[i].appendChild(create("div"));
          $$("main>div")[1].querySelectorAll("ul>li>a>div")[i].appendChild(create("div"));
          $$("main>div")[1].querySelectorAll("ul>li>a>div>div")[i].appendChild(create("p"));
    }
// Links dos projetos
$$("main>div")[1].querySelectorAll("ul>li>a")[0].setAttribute("href", "Aula-01/index.html");
$$("main>div")[1].querySelectorAll("ul>li>a")[1].setAttribute("href", "Aula-02/index.html");
$$("main>div")[1].querySelectorAll("ul>li>a")[2].setAttribute("href", "Aula-03/index.html");
$$("main>div")[1].querySelectorAll("ul>li>a")[3].setAttribute("href", "Aula-04/index.html");
$$("main>div")[1].querySelectorAll("ul>li>a")[4].setAttribute("href", "Aula-05/index.html");
$$("main>div")[1].querySelectorAll("ul>li>a")[5].setAttribute("href", "Aula-06/index.html");
$$("main>div")[1].querySelectorAll("ul>li>a")[6].setAttribute("href", "Aula-07_08/index.html");
// Ícones dos projetos
$$("main>div")[1].querySelectorAll("ul>li>a>img:nth-of-type(1)")[0].setAttribute("src", "img/aula-1__média.png");
$$("main>div")[1].querySelectorAll("ul>li>a>img:nth-of-type(1)")[1].setAttribute("src", "img/aula-2__calculadora.png");
$$("main>div")[1].querySelectorAll("ul>li>a>img:nth-of-type(1)")[2].setAttribute("src", "img/aula-3__mentalista.png");
$$("main>div")[1].querySelectorAll("ul>li>a>img:nth-of-type(1)")[3].setAttribute("src", "img/aula-4__aluraflix.png");
$$("main>div")[1].querySelectorAll("ul>li>a>img:nth-of-type(1)")[4].setAttribute("src", "img/aula-5__aluraflix-funcoes.png");
$$("main>div")[1].querySelectorAll("ul>li>a>img:nth-of-type(1)")[5].setAttribute("src", "img/aula-6__placar.png");
$$("main>div")[1].querySelectorAll("ul>li>a>img:nth-of-type(1)")[6].setAttribute("src", "img/aula-7+8__super-trunfo.png");
// Títulos dos projetos
$$("main>div")[1].querySelectorAll("ul>li>a>h2")[0].innerText = "Lista de alunos aleatórios";
$$("main>div")[1].querySelectorAll("ul>li>a>h2")[1].innerText = "Conversor de moedas";
$$("main>div")[1].querySelectorAll("ul>li>a>h2")[2].innerText = "Jogo de adivinhação";
$$("main>div")[1].querySelectorAll("ul>li>a>h2")[3].innerText = "Array e lista: AluraFlix";
$$("main>div")[1].querySelectorAll("ul>li>a>h2")[4].innerText = "AluraFlix dinâmico";
$$("main>div")[1].querySelectorAll("ul>li>a>h2")[5].innerText = "Tabela de competição";
$$("main>div")[1].querySelectorAll("ul>li>a>h2")[6].innerText = "SuperTrunfo de monstros";
// Descrição dos projetos
$$("main>div")[1].querySelectorAll("ul>li>a>div>div>p")[0].innerText = `Uma tabela é criada com 30 alunos, que possuem nota trimestrais aleatoriamente geradas; Alunos com nota >7 são aprovados. No rodapé da tabela encontram-se os totais e médias.`;
$$("main>div")[1].querySelectorAll("ul>li>a>div>div>p")[1].innerText = `O usuário insere um valor, em R$, que é convertido em várias outras moedas (Dólar, Euro, Yen e Renminbi)`;
$$("main>div")[1].querySelectorAll("ul>li>a>div>div>p")[2].innerText = `O jogador tem que adivinhar um número aleatório, de 1 a 10. Possui 3 vidas, ganhando 1 vida a cada acerto, máximo de 10 vidas, e perdendo 1 vida a cada erro.`;
$$("main>div")[1].querySelectorAll("ul>li>a>div>div>p")[3].innerText = `Simples teste: imprimir imagens através de URL. Possui uma lista dos meus filmes favoritos.`;
$$("main>div")[1].querySelectorAll("ul>li>a>div>div>p")[4].innerText = `Similar ao anterior, porém, o usuário pode inserir um título e url de imagem, além de poder deletar filmes.`;
$$("main>div")[1].querySelectorAll("ul>li>a>div>div>p")[5].innerText = `O usuário insere dados e, a partir deles, gera uma tabela com título do jogo, times/jogadores competindo e suas vitórias, empates e derrotas. A ideia é que cada jogador deve desafiar um ao outro, e o ganhador é quem ganhar de todos sem derrota. Infelizmente, requer cuidado do usuário para evitar problemas (ex.: não inserir vitórias sem derrotas de outros)`;
$$("main>div")[1].querySelectorAll("ul>li>a>div>div>p")[6].innerText = `O meu projeto mais complexo até a data de finalização da imersão. É um jogo de cartas estilo super trufo, utilizando monstros mitológicos, em que os jogadores (usuário e npc) recebem um deck de 30 cartas, semi-aleatoriamente geradas. Os jogadores posssuem uma quantidade de vida, e atacam e defendem em turnos, ganhando quem reduzir a vida ou número de cartas do oponente à 0.`;