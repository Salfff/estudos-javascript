// function externa() {
//   let contador = 0

//   function interna() {
//     contador++
//     return contador
//   }

//   return interna
// }

// const incrementar = externa()

// console.log(incrementar())


function criarContador() {
  let valor = 0

  return {
    incrementar() {
      valor++
      return valor
    },

    decrementar() {
      valor--
      return valor
    },

    mostrar() {
      return valor
    }
  }
}

const contador = criarContador()

console.log(contador.incrementar())

console.log(contador.incrementar())

console.log(contador.incrementar())

console.log(contador.decrementar())

console.log(contador.mostrar())
