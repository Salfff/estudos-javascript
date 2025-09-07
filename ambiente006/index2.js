// function media(n1, n2, n3) {
//   return (n1 + n2 + n3) / 3
// }

// console.log(media(2, 2, 2))


// function fatorial(n) {
//   let fat = 1;
//   for(let cont = n; cont > 1; cont--) {
//     fat *= cont;
//   }
//   return fat
// }

// console.log(fatorial(4))

function primo(n) { 
  let divisores = 0;
  count = 1;
  while(count <= n) {
    if(n % count === 0) {
      divisores++
    } 
    count++
  } 
  if(divisores != 2) {
    console.log('Não é primo')
  } else {
    console.log('É primo')
  }
}

primo(7)