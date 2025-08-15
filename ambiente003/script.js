let num = '654321'


let vetor = [];

for(let i = 0; i < num.length; i++){
    if(i === num.length-1 || Number(num[i]) > Number(num[i+1])) {
        vetor.push(Number(num[i]))
    }
}

console.log(vetor)