function iniciarContador(n) {
  let cont = 0;
  function incrementarN() {
    cont+=n
    console.log(cont)
  }
  return incrementarN
}

const contador = iniciarContador(5)
contador()
contador()
contador()