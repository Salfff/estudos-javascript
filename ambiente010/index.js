// let pizza;

// function orderPizza() {
//   console.log('Order Pizza')
//   setTimeout(() => {
//     pizza = '🍕'
//     console.log(`${pizza} is ready`)
//   }, 2000)
  
//   console.log('Pizza was ordered')
// }

// orderPizza()
// console.log('Call Qoli')
// console.log(`Eat ${pizza}`)

function orderPizza(callBack) {
  setTimeout(() => {
    const pizza = `🍕`
    callBack(pizza)
  }, 2000)  
}

function pizzaReady(pizza) {
  console.log(`Eat the ${pizza}`)
}

orderPizza(pizzaReady)
console.log('Call Qoli')