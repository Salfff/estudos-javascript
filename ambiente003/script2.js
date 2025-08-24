function gerarPiramide(linhas) {
  for(let i = 1; i<= linhas; i++) {
    let linha = ""

    for(let e = 0; e < linhas - i; e++) {
      linha += " ";
    }

    for(let s = 0; s < 2 * i-1; s++) {
      linha += '*'
    }

    console.log(linha)
  }
}

gerarPiramide(8)