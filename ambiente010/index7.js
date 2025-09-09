function Person(n) {
  this.name = n
  this.talk = function() {
    console.log(this)
  }

  setTimeout(() => {
    console.log(this)
  }, 100)

}

const me = new Person ('Sal')
