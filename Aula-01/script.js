/*

  Projeto: utilizando os conhecimentos recentes obtidos no curso 
  "JavaScript - conhecendo o Browser e padrões de projeto",
  Condições de conclusão:
  
  - Uma tabela será imprimida na tela, com:
    - Nome do aluno(a);
    - Sua nota, trimestre 1 à 4;
    - Sua média;
    - Aprovação, caso a média seja >= 7;
    - Totais, com:
      - Nota média da classe;
      - Porcentagem de aprovações;

*/

class _Aluno {
  constructor(nome, nota1, nota2, nota3, nota4) {
    this._nome = String(nome);
    this._nota1 = nota1;
    this._nota2 = nota2;
    this._nota3 = nota3;
    this._nota4 = nota4;
    this._media = Math.round((nota1 + nota2 + nota3 + nota4) / 4 / 0.25) * 0.25;
    this._aprovado = this._media >= 7.00 ? "Aprovado(a) ✓" : "Reprovado(a) X";
    Object.freeze(this);
  }
}

class ArrayAlunos {
  constructor() {
    this._arrayAlunos = [];
    this._mediaT1 = 0;
    this._mediaT2 = 0;
    this._mediaT3 = 0;
    this._mediaT4 = 0;
    this._mediaMedias = 0;
    this._porcentoAprovados = 0;
  }

  adiciona(nome, nota1, nota2, nota3, nota4) {
    this._arrayAlunos.push(new _Aluno(nome, nota1, nota2, nota3, nota4));
    this.atualizaValores();
  }

  atualizaValores() {
    let soma = 0;
    let length = this._arrayAlunos.length;

    for (let i = 0; i < length; i++) {
      soma += this.arrayAlunos[i]._nota1;
    }
    this._mediaT1 = soma / length;
    soma = 0;

    for (let i = 0; i < length; i++) {
      soma += this.arrayAlunos[i]._nota2;
    }
    this._mediaT2 = soma / length;
    soma = 0;

    for (let i = 0; i < length; i++) {
      soma += this.arrayAlunos[i]._nota3;
    }
    this._mediaT3 = soma / length;
    soma = 0;

    for (let i = 0; i < length; i++) {
      soma += this.arrayAlunos[i]._nota4;
    }
    this._mediaT4 = soma / length;
    soma = 0;

    for (let i = 0; i < length; i++) {
      soma += this.arrayAlunos[i]._media;
    }
    this._mediaMedias = soma / length;
    soma = 0;

    for (let i = 0; i < length; i++) {
      if (this.arrayAlunos[i]._aprovado === "Aprovado(a) ✓") {
        soma += 1;
      }
    }
    this._porcentoAprovados = `Aprovados: ${(() => (soma / length * 100).toFixed(0))()}%`;
  }

  get arrayAlunos() {
    return [].concat(this._arrayAlunos);
  }
}

// Lista dos nomes (10 nomes masculinos e femininos mais comuns do ano de 2021, no Brasil);
const alunoNomes = [
  "Miguel",
  "Arthur",
  "Gael",
  "Heitor",
  "Theo",
  "Davi",
  "Gabriel",
  "Bernardo",
  "Samuel",
  "João Miguel",
  "Helena",
  "Alice",
  "Laura",
  "Maria Alice",
  "Valentina",
  "Heloísa",
  "Maria Clara",
  "Maria Cecília",
  "Maria Julia",
  "Sophia"
];
// Número aleatório, de 5 a 10.
function notaAleatoria() {
  return Math.floor(Math.random() * 21) / 4 + 5;
}

// Cria a lista.
let listaAlunos = new ArrayAlunos();

// Insere os 20 alunos na lista criada.
for (let i = 0; i < 20; i++) {
  listaAlunos.adiciona(alunoNomes[i], notaAleatoria(), notaAleatoria(), notaAleatoria(), notaAleatoria());
}

// Seleciona o elemento "main" dentro da página html.

document.querySelector("main").innerHTML = `
<table>
    <thead>
        <tr>
            <th>aluno(a)</th>
            <th>nota T1</th>
            <th>nota T2</th>
            <th>nota T3</th>
            <th>nota T4</th>
            <th>média</th>
            <th>resultado</th>
        </tr>
    </thead>

    <tbody>
        ${(() => {
    return listaAlunos._arrayAlunos.map((n, i) => `
            <tr>
                <th>${n._nome}</th>
                <th>${n._nota1}</th>
                <th>${n._nota2}</th>
                <th>${n._nota3}</th>
                <th>${n._nota4}</th>
                <th>${n._media}</th>
                <th>${n._aprovado}</th>
            </tr>
            `
    ).join("");
  })()}
    </tbody>

    <tfoot>
        <tr>
          <tr>
            <th>totais:</th>
            <th>${listaAlunos._mediaT1}</th>
            <th>${listaAlunos._mediaT2}</th>
            <th>${listaAlunos._mediaT3}</th>
            <th>${listaAlunos._mediaT4}</th>
            <th>${listaAlunos._mediaMedias}</th>
            <th>${listaAlunos._porcentoAprovados}</th>
          </tr>
        </tr>
    </tfoot>
</table>
`;