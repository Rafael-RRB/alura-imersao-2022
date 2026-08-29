/*

  Projeto: Usuário adiciona os seus filmes favoritos.

  Conclusão:
  - Duas inputs:
    - Uma o usuário coloca a URL da imagem;
    - Uma o usuário coloca o título do filme;
  - Deletar um filme, através do nome ou index.

*/

// Declarações
class Filme {
  constructor(titulo, urlImagem) {
    this._titulo = String(titulo);
    this._urlImagem = urlImagem;
    Object.freeze(this);
  }

  get titulo() {
    return this._nome;
  }

  get url() {
    return this._urlImagem;
  }
}

class ListaFilmes {
  constructor() {
    this._listaFilmes = new Array();
  }

  add(titulo, urlImagem) {
    this._listaFilmes.push(new Filme(titulo, urlImagem));
  }

  get listaFilmes() {
    return [].concat(this._listaFilmes);
  }
}

let listaFilmes = new ListaFilmes();

// Scripts

$("main").appendChild(document.createElement("div"));
$("main").appendChild(document.createElement("div"));
$("main").appendChild(document.createElement("div"));

$("main div").appendChild(document.createElement("p"));
$("main div p").innerText = "Bem vindo ao AluraFlix!";

$("main div").appendChild(document.createElement("label"));
$("main div label:nth-of-type(1)").innerText = "Título do filme:";
$("main div label:nth-of-type(1)").appendChild(document.createElement("input"));

$("main div").appendChild(document.createElement("label"));
$("main div label:nth-of-type(2)").innerText = "URL da imagem:";
$("main div label:nth-of-type(2)").appendChild(document.createElement("input"));

$("main div").appendChild(document.createElement("button"));
$("main div button").innerText = "criar!";

$("main div:nth-of-type(2)").appendChild(document.createElement("p"));
$("main div:nth-of-type(2) p").innerText = "Para deletar, preencha abaixo:";
$("main div:nth-of-type(2)").appendChild(document.createElement("label"));
$("main div:nth-of-type(2) label").innerText = "Título ou nº do filme:";
$("main div:nth-of-type(2) label").appendChild(document.createElement("input"));
$("main div:nth-of-type(2)").appendChild(document.createElement("button"));
$("main div:nth-of-type(2) button").innerText = "deletar!";


function adicionaFilme() {
  listaFilmes.add(
    $("main div label:nth-of-type(1) input").value,
    $("main div label:nth-of-type(2) input").value
  );
  $("main div label:nth-of-type(1) input").value = "";
  $("main div label:nth-of-type(2) input").value = "";

  imprimeFilmes();
}
function imprimeFilmes() {
  $("main div:nth-of-type(3)").innerHTML = "";

  for (let i = 0; i < listaFilmes.listaFilmes.length; i++) {
    $("main div:nth-of-type(3)").appendChild(document.createElement("div"));
  }
  for (let i = 0; i < listaFilmes.listaFilmes.length; i++) {
    $$("main div:nth-of-type(3) div")[i].appendChild(document.createElement("img"));
    $$("main div:nth-of-type(3) div")[i].appendChild(document.createElement("p"));
  }
  for (let i = 0; i < listaFilmes.listaFilmes.length; i++) {
    $$("main div:nth-of-type(3) div img")[i].setAttribute("src", listaFilmes._listaFilmes[i]._urlImagem);
    $$("main div:nth-of-type(3) div p")[i].innerText = (i + 1) + " - " + listaFilmes._listaFilmes[i]._titulo;
  }
}
function removeFilme() {
  let inputDeletar = $("main div:nth-of-type(2) label input").value;
  if(!isNaN(parseInt(inputDeletar))) {
    inputDeletar = parseInt(inputDeletar);
  }
  switch(true) {
    case inputDeletar === "":
      alert("Você não inseriu um título ou número ainda.");
      break;
    case typeof(inputDeletar) === "number":
      if(typeof(listaFilmes._listaFilmes[inputDeletar - 1]) === "undefined") {
        alert("Você não inseriu um número válido...");
      } else {
        console.log("input deletar: " + inputDeletar);
        console.log("lista filmes: " + listaFilmes._listaFilmes[inputDeletar-1]);
        listaFilmes._listaFilmes.splice(inputDeletar - 1, 1);
        $("main div:nth-of-type(2) label input").value = "";
        imprimeFilmes();
      }
      break;
    case typeof(inputDeletar) === "string":
      let arrayDePesquisa = [];
      inputDeletar = inputDeletar.toUpperCase();
      for(let i = 0; i < listaFilmes._listaFilmes.length; i++) {
        arrayDePesquisa[i] = listaFilmes._listaFilmes[i]._titulo;
        arrayDePesquisa[i] = arrayDePesquisa[i].toUpperCase();
      }
      if(arrayDePesquisa.indexOf(inputDeletar) !== -1) {
        listaFilmes._listaFilmes.splice(arrayDePesquisa.indexOf(inputDeletar), 1);
        $("main div:nth-of-type(2) label input").value = "";
        imprimeFilmes();
      } else {
        console.log(arrayDePesquisa.indexOf(inputDeletar));
        alert("Você não inseriu um título válido...");
      }
      break;
    default:
      alert("ERROR!!!");
  }
}

/* Event listeners */
// Adicionar Filmes
$("main div:nth-of-type(1) label:nth-of-type(1) input").addEventListener("keydown", evento => {
  if (evento.key === "Enter") {
    if($("main div:nth-of-type(1) label:nth-of-type(1) input").value != "") {
      $("main div:nth-of-type(1) label:nth-of-type(2) input").focus();
    } else {
      alert("Por favor, preencha o campo...");
    }
  }
});

$("main div:nth-of-type(1) label:nth-of-type(2) input").addEventListener("keydown", evento => {
  if (evento.key === "Enter") {
    if ($("main div:nth-of-type(1) label:nth-of-type(2) input").value != "" && $("main div:nth-of-type(1) label:nth-of-type(1) input").value != "") {
      adicionaFilme();
    } else {
      alert("Você não preencheu um ou mais campos...");
    }
  }
});

$("main div:nth-of-type(1) button").addEventListener("click", evento => {
  if($("main div:nth-of-type(1) label:nth-of-type(1) input").value != "" && $("main div:nth-of-type(1) label:nth-of-type(2) input").value != "") {
    adicionaFilme();
  } else {
    alert("Você não preencheu um ou mais campos...");
  }
});

$("main div:nth-of-type(2) label input").addEventListener("keydown", evento => {
  if(evento.key === "Enter") {
    removeFilme();
  }
});
$("main div:nth-of-type(2) button").addEventListener("click", removeFilme);