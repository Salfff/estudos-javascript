function talk() {
  return `I am ${this.name}`
}

const me = {
  name: 'sina',
  talk
}
const you = {
  name: 'Qoli',
  talk
}

console.log(me.talk())
console.log(you.talk())

const meTalk = talk.bind(me)
console.log(meTalk())

console.log(talk.bind(you)())
console.log(talk.bind({name:'Oliver', talk})())

console.log(`I am ${{name: 'Thiago'}.name}`) // mesma coisa que usar o this para referenciar uma chave 

