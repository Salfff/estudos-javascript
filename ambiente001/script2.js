let vetor = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
let vetor2 = []
var num = 2;
if(num < 1 || num > 26) {
        console.log('Informe um número que esteja entre 1 e 26')
    } else {

    for(let i = 0; i < num; i++) {
        vetor2.push(vetor[i]);
    }

    console.log(vetor2)
}