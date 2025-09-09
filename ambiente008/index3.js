let x = 47

function fora() {
   let x = 1000
   function somarX() {
      return x + 3
   }
   return somarX
}
module.exports = fora()