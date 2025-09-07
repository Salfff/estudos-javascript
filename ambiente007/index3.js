let produtos = [
  {
    id: 1,
    nome: 'arroz',
    valor: 15.00,
    categoria: 'alimento',
  },
  {
    id: 2,
    nome: 'alvejante',
    valor: 10.00,
    categoria: 'limpeza',
  },
  {
    id: 3,
    nome: 'queijo gouda',
    valor: 30.00,
    categoria: 'alimento'
  },

  {
    id: 4,
    nome: 'sabão',
    valor: 14.00,
    categoria: 'limpeza',
  },

  {
    id: 5,
    nome: 'amaciante',
    valor: 22.00,
    categoria: 'limpeza',
  }
];

const limpeza = produtos.filter((p) => p.categoria === 'limpeza').map(p => p.nome)

console.log(limpeza)