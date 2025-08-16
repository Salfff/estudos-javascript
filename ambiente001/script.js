let input = document.getElementById("numInput");

let button = document.getElementById("botao");

let res = document.getElementById("res");

button.addEventListener("click", botaoClicado);

function botaoClicado() {
  let vetor = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];

  let vetorRes = [];
  let num = Number(input.value);

  res.innerHTML = "";
  input.value = "";
  if (num < 1 || num > 26) {
    alert("Informe um número que esteja entre 1 e 26");
  } else {
    for (let i = 0; i < num; i++) {
      vetorRes.push(`<br> ${vetor[i]}`);
    }
    res.innerHTML = vetorRes;
  }
}
