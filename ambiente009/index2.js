function human(name) {
  
  function sayHi() {
    console.log(`Hi, I am ${name}`)
  }
  function sayHowYouFeel() {
    console.log(`${name} is Feeling good`)
  }
  return {
    sayHi,
    sayHowYouFeel
  }
}

const polaina = human('Polaina')
const qoli = human('Qoli')

polaina.sayHi()
polaina.sayHowYouFeel()
