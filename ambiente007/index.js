const arr = [, 'p', 'f']

// const bacon = arr[0];
// const pizza = arr[1];
// const fries = arr[2];

// const [bacon='b', pizza, fries] = arr;
// const [bacon, ...rest] = arr;

// console.log(bacon)

const obj = {
  shroom: 's',
  banana: 'b',
  pepper: 'p'
}

const {shroom: mushroom} = obj

const obj2 = {
 parent: {
  child: 'bb'
 },
}

const {parent: {child}} = obj2

console.log(child)
