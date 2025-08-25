function bissextoConsulta(ano) {
  return (ano % 400 === 0) ? "é ano bissexto" 
       : (ano % 100 === 0) ? "Não é bissexto" 
       : (ano % 4 === 0)   ? 'é ano bissexto' 
       : 'Não é ano bissexto';
  
}

console.log(bissextoConsulta(1600))