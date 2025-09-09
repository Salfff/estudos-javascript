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

const callMe = talk.call(me)

console.log(callMe)