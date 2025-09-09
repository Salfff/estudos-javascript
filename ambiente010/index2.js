// function thing1(callback) {
//   // Call pizza shop
//   callback()
// }

// function thing2(callback) {
//   // Order the pizza
//   callback()
// }

// function thing3(callback) {
//   // Eat Pizza
//   callback()
// }

// thing1(() => {
//   thing2(() => {
//     thing3()
//   })
// })


function brushTeeth(callback) {
  setTimeout(() => {
    console.log('Teeth brushed')
    callback()
  }, 1000)
}

function prepareMeal(callback) {
  setTimeout(() => {
    console.log('Meal prepared')
    callback()
  }, 2000)
}

function eatMeal(callback) {
  setTimeout(() => {
    console.log('eating meal')

    setTimeout(() => {
      callback()
    }, 3000)
  }, 2000)

  
  
}

function doneEating() {
  console.log('Ate meal')
}

brushTeeth(() => {
  prepareMeal(() => {
    eatMeal(() => {
      doneEating()
    })
  })
})