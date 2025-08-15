

function palindromoId(palavra) {
    let palavraContrario = ''

    for(let i = palavra.length -1; i >= 0; i--) {
        palavraContrario += palavra[i]
    } 
    
    if(palavra.toUpperCase() != palavraContrario.toLocaleUpperCase()) {
        console.log('Não é palíndromo')
        return
    }

    console.log('É palíndromo')
}

palindromoId('ovoa')
