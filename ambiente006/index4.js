const produtos = [
  {id: 1, nome: 'detergente', valor: 2.00, categoria: 'limpeza'},

  {id: 2, nome: 'amaciante', valor: 6.50, categoria: 'limpeza'},

  {id: 3, nome: 'pão', valor: 2.00, categoria: 'alimento'},

  {id: 4, nome: 'queijo', valor: 7.00, categoria: 'alimento'},

  {id: 5, nome: 'escova de dentes', valor: 2.25, categoria: 'higiene'},
];

const alimentos = produtos.filter(p => p.categoria === 'alimento').map(a => a.nome)

console.log(alimentos)

const id2 = produtos.filter(i => i.id === 2)
// .map(id => id.nome) <= Como o filter retorna uma array, é possível aplicar o map diretamenta ao fim da const.

const id2nome = id2.map(id => id.nome)

console.log(id2)