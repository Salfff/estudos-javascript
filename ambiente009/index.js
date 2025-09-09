const names = ['Sina', 'Sam', 'Quill', 'Ben', 'Sam', 'Quentin']

const filtered = []

for ( let i = 0; i < names.length; i++) {
  if (names[i][0] !== 'Q') {
    filtered.push(names[i])
  }
}

console.log(filtered)

const filterName= names.filter(n => n[0] !== 'Q')

console.log(filterName)