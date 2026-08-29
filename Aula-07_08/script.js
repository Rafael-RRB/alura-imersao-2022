/*

  Projeto: Scoreboard!

  // Conclusão:

  + Cartas aleatoriamente geradas;
    + Cartas possuem:
      + Nome;
      + Ataque;
      + Magia;
      + Agilidade;
      + Ícone;
      + Todos os valores são semi-aleatoriamente gerados;
  
  + Usuário e NPC possuem um "deck" de cartas;
  
  + Dificuldade selecionável:
    + Bonus fácil: player +500 HP, npc -500 HP;
    + Bonus normal: nenhum bonus;
    + Bonus difícil: player -500 HP, npc +500 HP;

  + Imprimir na tela as cartas & botões;
    + Texto com o nome do(a) jogador(a);
    + Representação gráfica da carta (ex.: emoji);
    + Texto com a raça do monstro;
    + Botões:
      + Botão de ataque;
        + Funcional;
      + Botão de magia;
        + Funcional;
      + Botão de agilidade;
        + Funcional;
    + Total de ataque;
    + Total de magia;
    + Total de agilidade;
    + Botão de descarte;

  - Criar um log das ações do NPC (ex.: descartou N cartas neste turno. Irá usar Magia!)

  + Inteligência artificial:
    + Fácil: 
      + Joga qualquer carta;
      + Escolhe os atributos:
        + Pior: 50%;
        + Médio: 50%;
        + Melhor: 0%;
    + Médio: 
      + Joga qualquer carta;
      + Escolhe os atributos:
        + Pior: 0%;
        + Médio: 50%;
        + Melhor: 50%;
    + Difícil:
      + Joga apenas cartas que:
        + No ataque, possuam algum atributo igual ou superior a 2000;
        +Na defesa, possuam o atributo defendido igual ou superior a 2000;
      + Escolhe os atributos:
        + Pior: 0%;
        + Médio: 0%;
        + Melhor: 100%;

    + Finalizar o botão de turno;
      + Adicionar addEventListener;
    
/* Funções */

  // Fornece um template de monstro;
  function monstroAleatorio() {
    let monstros = [["Anjo", "Basilisco", "Cérbero", "Dragão", "Esfinge", "Fênix", "Golem", "Harpia", "Íncubo",
     "Jinn", "Kitsune", "Lâmia", "Mantícora", "Nereida", "Ogro", "Pégaso", "Quetzalcoatl", "Roca", "Súcubo",
     "Troll", "Unicórnio", "Vampiro", "Wendigo", "Yeti", "Zumbi"],
     [1000,700,800,1000,800,700,1000,400,600,400,400,700,800,600,1000,600,700,600,400,1000,600,700,800,800,400],
     [1000,700,700,700,800,1000,600,600,1000,800,1000,600,600,800,400,800,700,400,1000,400,800,700,600,400,400],
     [1000,600,700,600,600,800,400,1000,800,800,800,700,700,600,400,1000,700,800,1000,400,500,700,600,400,400],
     ['✝','⚋','✹','♨','☥','☀','✡','☁','♂','⚱','❖','⚕','♅','♆','⚈','♞','♬','☄','♀','⚉','♘','⚰','☠','❆','☣']];
    let numAleatorio = Math.floor(Math.random() * 25);
    return [monstros[0][numAleatorio], monstros[1][numAleatorio], monstros[2][numAleatorio], monstros[3][numAleatorio], monstros[4][numAleatorio]];
  }
/* Constant, let & var */
  // Const
  let playerNome = prompt("Bem vindo! Qual o seu nome?\n(De 2 a 12 caracteres)");
  while(playerNome === "" || playerNome.length < 2 || playerNome.length > 12) {
    playerNome = prompt("Você não inseriu um nome válido... tente novamente.\n(De 2 a 12 caracteres)");
  }
  const dicionarioFacil = ["f", "fac", "facil", "fácil", "easy", "e", "0"];
  const dicionarioNormal = ["n", "nor", "normal", "padrão", "pad", "p", "1"];
  const dicionarioDificil = ["d", "dif", "dificil", "difícil", "hard", "h", "2"];
  const dicionarioDificuldades = [].concat(dicionarioFacil, dicionarioNormal, dicionarioDificil);
  // Let
  let dificuldade = prompt("Por favor, digite a dificuldade da partida:\n  * Fácil:\n  Você: 3500 energia | Oponente: 2500 energia;\n\n  * Normal:\n  Você: 3000 energia | Oponente: 3000 energia;\n\n  * Difícil:\n  Você: 2500 energia | Oponente: 3500 energia;");
  while(!dicionarioDificuldades.includes(dificuldade)) {
    dificuldade = prompt("Você não inseriu uma dificuldade válida...\nDificuldades: Fácil, Normal ou Difícil");
  }
  switch(true) {
    case dicionarioFacil.includes(dificuldade):
      dificuldade = [2, 0.9];
      break;
    case dicionarioNormal.includes(dificuldade):
      dificuldade = [4, 1];
      break;
    case dicionarioDificil.includes(dificuldade):
      dificuldade = [6, 1.1];
      break;
    default:
      throw new Error("Dificuldade não é válida.");
  }
    // Status iniciais dos usuários
    let pcEnergia = 3000 + (1000 - dificuldade[0] * 250);
    let npcEnergia = 3000 + (-1000 + dificuldade[0] * 250);
  // Cartas individuais
  class Carta {
    constructor() {
      this.racaMonstro = monstroAleatorio();
      this.nome = this.racaMonstro[0];
      this.imagem = this.racaMonstro[4];
      this.ataque = (Math.floor(Math.random() * 11) * 100 + 1000 + this.racaMonstro[1]);
      this.magia = (Math.floor(Math.random() * 11) * 100 + 1000 + this.racaMonstro[2]);
      this.agilidade = (Math.floor(Math.random() * 11) * 100 + 1000 + this.racaMonstro[3]);
    }
  }
  // Armazena as cartas
  class DeckCartas {
    constructor() {
      this.deckCartas = [];
      this.lixoCartas = [];
    }
    // Funções
    geraDeck() {
      for(let i = 0; i < 30; i++) {
        this.deckCartas.push(new Carta());
      }
    }
    descartaCarta() {
      this.lixoCartas.push(this.deckCartas[0]);
      this.deckCartas.splice(0, 1);
      // Atualiza o array de atributos da carta do player
      playerArrayAtributos = [player.deck.deckCartas[0].ataque,
      player.deck.deckCartas[0].magia,
      player.deck.deckCartas[0].agilidade];
      // Atualiza o array de atributos da carta do npc
      npcArrayAtributos = [npc.deck.deckCartas[0].ataque,
      npc.deck.deckCartas[0].magia,
      npc.deck.deckCartas[0].agilidade];
      atualizaTela();
    }
  }
  // Usuario
  class Usuario {
    constructor(nome, energia, deck) {
      this.nome = nome;
      this.energia = energia;
      this.deck = deck;
    }
  }
// Scripts
  // Cria o player e npc
    let combateTurno = 0;
    // Player
    let player = new Usuario(playerNome, pcEnergia, new DeckCartas());
    player.deck.geraDeck();
    let playerArrayAtributos = [player.deck.deckCartas[0].ataque,
    player.deck.deckCartas[0].magia,
    player.deck.deckCartas[0].agilidade];
    
    // NPC
    let npc = new Usuario("NPC", npcEnergia, new DeckCartas());
    var escolhaAtributo;
    npc.deck.geraDeck();
    let npcArrayAtributos = [npc.deck.deckCartas[0].ataque,
    npc.deck.deckCartas[0].magia,
    npc.deck.deckCartas[0].agilidade];
    let cartasAtual = [30];

  // Construção do HTML
  let main = $("main");

    // Cria uma carta, com os elementos compartilhados entre player & npc
    function htmlCriaCarta(nome, vida, cartas, imagem, raca) {
      main.appendChild(create("div"));
      let mainDivs = main.querySelector("main>div:last-child");
      let arrayElementos = ["h2", "hr", "div", "p"];
      for(let i = 0; i < 4; i++) {
        mainDivs.appendChild(create(arrayElementos[i]));
      }
      mainDivs.querySelector("h2").innerText = `${nome} - ${vida} PV - ${cartas} Cartas`;
      mainDivs.querySelector("div").appendChild(create("p"));
      mainDivs.querySelector("div > p").innerText = imagem;
      mainDivs.querySelector("div + p").innerText = raca;
    }
    // Carta do jogador
    htmlCriaCarta(player.nome, player.energia, player.deck.deckCartas.length, player.deck.deckCartas[0].imagem, player.deck.deckCartas[0].nome, 0);
    let cartoesJogadores = $$("main>div");
    
    cartoesJogadores[0].appendChild(create("div"));
     
      cartoesJogadores[0].querySelector("div:nth-of-type(2)").appendChild(create("button"));  
        cartoesJogadores[0].querySelector("div:nth-of-type(2)>button:nth-of-type(1)").innerText = "ATAQUE: " + player.deck.deckCartas[0].ataque + " pontos.";
      
      cartoesJogadores[0].querySelector("div:nth-of-type(2)").appendChild(create("button"));
        cartoesJogadores[0].querySelector("div:nth-of-type(2)>button:nth-of-type(2)").innerText = "MAGIA: " + player.deck.deckCartas[0].magia + " pontos.";
    
      cartoesJogadores[0].querySelector("div:nth-of-type(2)").appendChild(create("button"));
        cartoesJogadores[0].querySelector("div:nth-of-type(2)>button:nth-of-type(3)").innerText = "AGILIDADE: " + player.deck.deckCartas[0].agilidade + " pontos.";

      cartoesJogadores[0].appendChild(create("button"));
      cartoesJogadores[0].querySelector("div+button").innerText = "DESCARTE";
    // Carta do npc
    htmlCriaCarta(npc.nome, npc.energia, npc.deck.deckCartas.length, npc.deck.deckCartas[0].imagem, npc.deck.deckCartas[0].nome, 1);
    cartoesJogadores = $$("main>div");

    cartoesJogadores[1].appendChild(create("div"));
      
      cartoesJogadores[1].querySelector("div:nth-of-type(2)").appendChild(create("p"));
        cartoesJogadores[1].querySelector("div>div:nth-of-type(2)>p").innerText = "DEBUGTEXTO";

      cartoesJogadores[1].appendChild(create("button"));
        cartoesJogadores[1].querySelector("button").innerText = "Combate!";

/* Execução dos turnos */
  // Atualiza os dados da tela
  function atualizaTela() {
    // Atualiza os monstros
    let visualCartaoJogador = $$("main>div");
      // Jogador
      visualCartaoJogador[0].querySelector("h2").innerText = `${player.nome} - ${player.energia} PV - ${player.deck.deckCartas.length} Cartas`;
      visualCartaoJogador[0].querySelector("div > p").innerText = player.deck.deckCartas[0].imagem;
      visualCartaoJogador[0].querySelector("div + p").innerText = player.deck.deckCartas[0].nome;
      // NPC
      visualCartaoJogador[1].querySelector("h2").innerText = `${npc.nome} - ${npc.energia} PV - ${npc.deck.deckCartas.length} Cartas`;
      visualCartaoJogador[1].querySelector("div > p").innerText = npc.deck.deckCartas[0].imagem;
      visualCartaoJogador[1].querySelector("div + p").innerText = npc.deck.deckCartas[0].nome;
    // Atualiza os botões
    cartoesJogadores[0].querySelector("div:nth-of-type(2)>button:nth-of-type(1)").innerText = "ATAQUE: " + player.deck.deckCartas[0].ataque + " pontos.";
    cartoesJogadores[0].querySelector("div:nth-of-type(2)>button:nth-of-type(2)").innerText = "MAGIA: " + player.deck.deckCartas[0].magia + " pontos.";
    cartoesJogadores[0].querySelector("div:nth-of-type(2)>button:nth-of-type(3)").innerText = "AGILIDADE: " + player.deck.deckCartas[0].agilidade + " pontos.";
  }
  // Causa dano e descarta as cartas de combate
  function executaTurnoDano(alvo, dano) {
    switch(true) {
      case alvo === 0:
        player.energia -= dano;
        if(player.energia < 0) {
          player.energia = 0;
        }
        break;
      case alvo === 1:
        npc.energia -= dano;
        if(npc.energia < 0) {
          npc.energia = 0;
        }
        break;
    }
  }
  // Escolhe um atributo baseado no parâmetro passado (min = 2; med = 4; max = 6)
  function escolheAtributo(dificuldade) {
    function atributoMediano() {
      let atributoMin = Math.min(...npcArrayAtributos);
      let atributoMax = Math.max(...npcArrayAtributos);
      let atributoMed;
      switch(true) {
        case npcArrayAtributos[0] > atributoMin && npcArrayAtributos[0] < atributoMax:
          atributoMed = 0;
        case npcArrayAtributos[1] > atributoMin && npcArrayAtributos[0] < atributoMax:
          atributoMed = 1;
        default:
          atributoMed = 2;
      }
      return atributoMed;
    }
    switch(true) {
      case dificuldade === 2:
        if(Math.floor(Math.random() * 2) === 0) {
          escolhaAtributo = npcArrayAtributos.indexOf(Math.min(...npcArrayAtributos));
        } else {
          escolhaAtributo = atributoMediano();
        }
        break;
      case dificuldade === 4:
        if(Math.floor(Math.random() * 2) === 0) {
          escolhaAtributo = atributoMediano();
        } else {
          escolhaAtributo = npcArrayAtributos.indexOf(Math.max(...npcArrayAtributos));
        }
        break;
      case dificuldade === 6:
        // Retorna o atributo maximo
        escolhaAtributo = npcArrayAtributos.indexOf(Math.max(...npcArrayAtributos));
    }
    return escolhaAtributo;
  }
  // Retorna o valor do atributo escolhido
  function retornaAtributo(escolha) {
    switch(true) {
      case escolha === 0:
        return npc.deck.deckCartas[0].ataque;
      case escolha === 1:
        return npc.deck.deckCartas[0].magia;  
      case escolha === 2:
        return npc.deck.deckCartas[0].agilidade;
    }
  }
  // Descarta (ou não) cartas baseado na dificuldade
  function gerenciaCartas() {
    // Ações baseadas na dificuldade
    switch(true) {
      case dificuldade[0] === 2:
        // Não faça nada
        if(combateTurno === 0) {
        } else {
          escolheAtributo(dificuldade[0]);
        }
        break;
      case dificuldade[0] === 4:
        // Descarte apenas defensivamente
        if(combateTurno === 0) {
          while(npc.deck.deckCartas[0].ataque < 2000 || npc.deck.deckCartas[0].magia < 2000 || npc.deck.deckCartas[0].agilidade < 2000 && npc.deck.deckCartas.length > 9) {
            npc.deck.descartaCarta();
          }
        } else {
          escolheAtributo(dificuldade[0]);
        }
        break;
      case dificuldade[0] === 6:
        // Descarte agressivamente
        if(combateTurno === 0) {
          while(npc.deck.deckCartas[0].ataque < 2000 || npc.deck.deckCartas[0].magia < 2000 || npc.deck.deckCartas[0].agilidade < 2000 && npc.deck.deckCartas.length > 9) {
            npc.deck.descartaCarta();
          }
        } else {
          escolheAtributo(dificuldade[0]);
          while(retornaAtributo(escolhaAtributo) < 2000) {
            npc.deck.descartaCarta();
          }
        }
    }
  }  
  // Gera uma mensagem "log" para o cartão do npc
  function geraMensagem() {
    cartasAtual.push(npc.deck.deckCartas.length);
    // Primeira linha - quantidade de cartas descartadas
    let primeiraLinha = `Nenhum monstro foi descartado por ${npc.nome} neste turno.`;
      if(cartasAtual[cartasAtual.length - 2] - cartasAtual[cartasAtual.length - 1] > 0) {
        primeiraLinha = `Neste turno, ${npc.nome} livrou-se de ${cartasAtual[cartasAtual.length - 2] - cartasAtual[cartasAtual.length - 1]} monstros...`;
      }
    // Segunda linha - em turno par (npc), qual o atributo selecionado no turno  
    let segundaLinha = "";
      if(combateTurno === 1) {
        segundaLinha = `${npc.nome} ordena o seu monstro a usar o poder de ${["ataque", "magia", "agilidade"][escolhaAtributo]}!`;
      }
    cartoesJogadores[1].querySelector("div>div:nth-of-type(2)>p").innerText =  `${primeiraLinha}\n\n${segundaLinha}`;
    }
  // Executar no turno 0
  if(combateTurno === 1) {
    escolheAtributo(dificuldade[0]);
  }
  gerenciaCartas(escolhaAtributo);
  geraMensagem();
  // Executa o turno, quando o jogador clica em "Ataque", "Magia", "Agilidade" ou "Combate"
  function executaTurno(botao) {
    // Executa o turno: 0 para jogador atacando npc, 1 para npc atacando jogador
    if(combateTurno === 0) {
      // Turno do player
      switch(true) {
        case playerArrayAtributos[botao] > npcArrayAtributos[botao]:
          alert(`Você ganhou!\nO oponente recebe ${Math.abs(npcArrayAtributos[botao] - playerArrayAtributos[botao])} pontos de dano...`);
          executaTurnoDano(1, playerArrayAtributos[botao] - npcArrayAtributos[botao]);
          break;
        case playerArrayAtributos[botao] === npcArrayAtributos[botao]:
          alert(`Empate?!\nNinguém recebe dano...`);
          executaTurnoDano(-1, 0);
          break;
        case playerArrayAtributos[botao] < npcArrayAtributos[botao]:
          alert(`Você perdeu..!\nRecebe ${Math.abs(npcArrayAtributos[botao] - playerArrayAtributos[botao])} pontos de dano...`);
          executaTurnoDano(0, npcArrayAtributos[botao] - playerArrayAtributos[botao]);
          break;
      }
      combateTurno = 1;
      if(vitoriaDerrota() === 0) {
        gerenciaCartas(escolhaAtributo);
        geraMensagem();
        estadoBotoes();
      } else {
        atualizaTela();
        desativaTudo();
      }
    } else {
      // Turno do npc
      switch(true) {
        case playerArrayAtributos[escolhaAtributo] > npcArrayAtributos[escolhaAtributo]:
          alert(`Você ganhou!\nO oponente recebe ${Math.abs(npcArrayAtributos[escolhaAtributo] - playerArrayAtributos[escolhaAtributo])} pontos de dano...`);
          executaTurnoDano(1, playerArrayAtributos[escolhaAtributo] - npcArrayAtributos[escolhaAtributo]);
          break;
        case playerArrayAtributos[escolhaAtributo] === npcArrayAtributos[escolhaAtributo]:
          alert(`Empate?!\nNinguém recebe dano...`);
          executaTurnoDano(-1, 0);
          break;
        case playerArrayAtributos[escolhaAtributo] < npcArrayAtributos[escolhaAtributo]:
          alert(`Você perdeu..!\nRecebe ${Math.abs(npcArrayAtributos[escolhaAtributo] - playerArrayAtributos[escolhaAtributo])} pontos de dano...`);
          executaTurnoDano(0, npcArrayAtributos[escolhaAtributo] - playerArrayAtributos[escolhaAtributo]);
          break;
      }
      combateTurno = 0;
      if(vitoriaDerrota() === 0) {
        gerenciaCartas(escolhaAtributo);      
        geraMensagem();
        estadoBotoes();
      } else {
        atualizaTela();
        desativaTudo();
      }
    }
  }
  // Condições de vitória/derrota
  function vitoriaDerrota() {
    console.log("vitoriaDerrota() executado:");
    // Transforma as cartas, adicionando texto (ex.: vitorioso)
    function cartaoVitoriaDerrota(alvo, resultado) {
      // Empurra uma nova carta para ser manipulada (evita problemas se taamanho < 1)
      alvo.deck.deckCartas.push(new Carta());
      if(resultado === 0) {
        alvo.deck.deckCartas[0].nome = "derrotado...";
        alvo.deck.deckCartas[0].imagem = "⚑";
      } else if(resultado === 1) {
        alvo.deck.deckCartas[0].nome = "vitorioso!!!";
        alvo.deck.deckCartas[0].imagem = "♚";
      } else {
        alert("Valor inválido para cartaoVitoriaDerrota(), dentro de vitoriaDerrota();");
      }
    }
    // Player ou npc derrotado
    let retornaResultado = 0;
    switch(true) {
      case player.energia < 100:
        console.log(`Jogador perdeu: 0 HP`);
        retornaResultado = 1;
        cartaoVitoriaDerrota(player, 0);
        cartaoVitoriaDerrota(npc, 1);
        break;
      case npc.energia < 100:
        console.log(`NPC perdeu: 0 HP`);
        retornaResultado = 1;
        cartaoVitoriaDerrota(player, 1);
        cartaoVitoriaDerrota(npc, 0);
        break;
      default:
        console.log("--");
        console.log("Ninguém perdeu por energia 0 -- Testes abaixo:");
        console.log(player.energia < 100);
        console.log(npc.energia < 100);
        console.log("--");
        switch(true) {
          case player.deck.deckCartas.length > 1:
            player.deck.descartaCarta();
          case npc.deck.deckCartas.length > 1:
            npc.deck.descartaCarta();   
        }
        switch(true) {
          case player.deck.deckCartas.length <= 1:
            console.log(`Jogador perdeu: 0 cartas`);
            retornaResultado = 1;
            cartaoVitoriaDerrota(player, 0);
            cartaoVitoriaDerrota(npc, 1);
            break;
          case npc.deck.deckCartas.length <= 1:
            console.log(`NPC perdeu: 0 cartas`);
            retornaResultado = 1;
            cartaoVitoriaDerrota(player, 1);
            cartaoVitoriaDerrota(npc, 0);
            break;
          default:
            console.log("--");
            console.log("Ninguém perdeu por ficar sem cartas -- Testes abaixo:");
            console.log(player.deck.deckCartas.length < 1);
            console.log(player.deck.deckCartas.length);
            console.log(npc.deck.deckCartas.length < 1);
            console.log(npc.deck.deckCartas.length);
            console.log("--");
        }
      }
      atualizaTela();
      return retornaResultado;
    }
/* Event listeners */
  // Botões do player
    // Botão de ataque
    $("main>div div:nth-of-type(2)>button:nth-of-type(1)").addEventListener("click", evento => {
      let botaoClicado = 0;
      executaTurno(botaoClicado);
    });
    // Botão de magia
    $("main>div div:nth-of-type(2)>button:nth-of-type(2)").addEventListener("click", evento => {
      let botaoClicado = 1;
      executaTurno(botaoClicado);
    });
    // Botão de agilidade
    $("main>div div:nth-of-type(2)>button:nth-of-type(3)").addEventListener("click", evento => {
      let botaoClicado = 2;
      executaTurno(botaoClicado);
    });
    // Botão de descarte
    $("main>div>button").addEventListener("click", evento => {        
      if(player.deck.deckCartas.length > 1) {
        player.deck.descartaCarta();
      } else {
        alert("Você não pode descartar sua última carta..!");
      }
    });
  // Botão do npc
    // Combate
    $$("main>div")[1].querySelector("button").addEventListener("click", evento => {
      executaTurno();
    });

    function estadoBotoes() {
      console.log("--");
      console.log(player.deck);
      console.log(npc.deck);
      console.log("--");
      console.log(npc.deck.deckCartas[0].ataque);
      console.log(npc.deck.deckCartas[0].magia);
      console.log(npc.deck.deckCartas[0].agilidade);
      console.log("--");
      if(combateTurno === 0) {
        // Ativa os botões do player
        $$("main>div")[0].querySelectorAll("div:nth-of-type(2)>button").forEach((valor, index, array) => {
          array[index].removeAttribute("disabled");
        });
        // Desativa os botões do npc
        $$("main>div")[1].querySelector("button").setAttribute("disabled", "");
      } else {
        // Ativa os botões do npc
        $$("main>div")[1].querySelector("button").removeAttribute("disabled");
        // Desativa os botões do player
        $$("main>div")[0].querySelectorAll("div:nth-of-type(2)>button").forEach((valor, index, array) => {
          array[index].setAttribute("disabled", "");
        });
      }
    }
    estadoBotoes();
    // Desativa todas as ações possíveis, após um usuário ganhar ou perder
    function desativaTudo() {
      // Player
      $$("main>div>h2")[0].innerText = player.nome;
      $$("main>div")[0].querySelectorAll("div:nth-of-type(2)>button").forEach((valor, index, array) => {
        array[index].innerText = "";
        array[index].setAttribute("disabled", "");
      });
      $("main>div>button").innerText = "";
      $("main>div>button").setAttribute("disabled", "");
      // NPC
      $$("main>div>h2")[1].innerText = npc.nome;
      $("main>div:nth-of-type(2)>p+div>p").innerText = "";
      $$("main>div")[1].querySelector("button").innerText = "";
      $$("main>div")[1].querySelector("button").setAttribute("disabled", "");
    }
/* Logs */