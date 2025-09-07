function criarBanco(saldoInicial) {
  let saldo = saldoInicial;

  return {
    depositar: function(valor) {
      saldo += valor;
      console.log("Saldo: ", saldo)
    },

    sacar: function(valor) {
      if(valor >= saldo) {
        console.log('Valor insuficiente!')
      } else {
        saldo -= valor;
        console.log('Saldo: ', saldo)
      }
    }
  }
}

const conta =  criarBanco(100);
conta.depositar(50)
conta.sacar(70)