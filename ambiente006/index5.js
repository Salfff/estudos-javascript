// const numeros = [1, 2, 3, 4]

// const total = numeros.reduce((acc, numero) => acc + numero)

// console.log(total)

const produtos = [
  {id: 1, nome: 'detergente', valor: 2.00, categoria: 'limpeza'},

  {id: 2, nome: 'amaciante', valor: 6.50, categoria: 'limpeza'},

  {id: 3, nome: 'pão', valor: 2.00, categoria: 'alimento'},

  {id: 4, nome: 'queijo', valor: 7.00, categoria: 'alimento'},

  {id: 5, nome: 'escova de dentes', valor: 2.25, categoria: 'higiene'},
];

// const total = produtos.reduce((acc, p) => acc + p.valor, 0)

// console.log(total)

const total = produtos.map((p => p.valor)).reduce((acc, v) => acc + v)

console.log(total)