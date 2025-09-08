const arr1 = [1, 2, 3]

const arr2 = [4, 5, 6]

const arrSpread = [...arr1, ...arr2]

const arrSpreadCopy = [...arrSpread]

console.log(arrSpread)
console.log(arrSpreadCopy)

const copy = () => {
  let arr = []
  for(let cont = 0; cont < arrSpread.length; cont++) {
    if(arrSpread[cont] === 1) {
      console.log(cont)
    }
    arr.push(arrSpread[cont])
  }
  console.log(arr)

  
  console.log()
}

copy()