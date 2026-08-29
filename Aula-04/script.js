/*

  Projeto: Criar um site com os seus filmes favoritos, dinâmicamente.

  Conclusão:
  - Cada filme favorito criará o seguinte:
    - Uma div;
      - Uma img do cartaz do filme;
      - Um p do título do filme;

*/

// Declarações
var filmesFavoritos = new Array(
  "O enigma de outro mundo",
  "Trilogia o senhor dos anéis",
  "Coringa",
  "Rocky",
  "Nascido para matar",
  "Akira"
);
var filmesFonteImagem = new Array(
  "https://br.web.img3.acsta.net/c_310_420/medias/nmedia/18/96/76/33/20487876.jpg",
  "https://br.web.img3.acsta.net/c_310_420/medias/nmedia/18/92/91/32/20224832.jpg",
  "https://www.ucicinemas.com.br/Content/Upload/Filmes/Posters/8966/filme_8966.jpg",
  "https://upload.wikimedia.org/wikipedia/pt/1/18/Rocky_poster.jpg",
  "https://br.web.img2.acsta.net/pictures/210/093/21009361_20130529171930105.jpg",
  "https://br.web.img3.acsta.net/medias/nmedia/18/87/36/26/19874715.jpg"
);


// Scripts

/* Cria 6 "div" dentro do "main" */
for (let i = 0; i < 6; i++) {
  $("main").appendChild(document.createElement("div"));
}

/* Cria os elementos "img" e "p" dentro das "div" criadas acima */
for (let i = 0; i < $$("main div").length; i++) {
  $$("main div")[i].appendChild(document.createElement("img"));
  $$("main div")[i].appendChild(document.createElement("p"));
}

/* Adiciona a fonte para a imagem */
for (let i = 0; i < $$("main div img").length; i++) {
  $$("main div img")[i].setAttribute("src", filmesFonteImagem[i]);
}

/* Insere o nome do filme dentro do elemento "p" criado */
for (let i = 0; i < $$("main div p").length; i++) {
  $$("main div p")[i].innerText = filmesFavoritos[i];
}