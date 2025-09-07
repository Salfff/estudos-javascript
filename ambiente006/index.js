function fatorial(n) {
  if(n === 0 || n === 1) {
    return 1;
  } else {
    var fat = n * fatorial(n - 1)
    return fat
  }
  
}

console.log(fatorial(4))