function talk(lang, isPolite) {
  if(isPolite) {
  if(lang === 'en') {
      return `Hello, I am ${this.name}`
    } else if (lang === 'it') {
      return `Ciao, sono ${this.name}`
    }
  }
  if(!isPolite) {
    if(lang === 'en') {
      return `${this.name}, why you ask?`
    } else if (lang === 'it') {
      return `${this.name}`
    }
  }
}

const me = {
  name: 'Sal'
}

console.log(talk.call(me, 'en', false))
console.log(talk.apply(me, ['en', false]))