use('ecomm');

const contas = db.accounts.insertMany([
  {
    usuario: 'leonel',
    email: 'leonel@gmail.com',
    senha: '2ewdw',
    dataCriacao: new Date(2018 - 11 - 18),
    cpf: '78876689052',
    telefone: '23938274938',
    endereco: {
      bairro: 'sao luiz',
      rua: 'd',
      numero: '2',
      complemento: '',
      cep: '41515012',
      cidade: 'rio de janeiro',
      uf: 'rj',
    },
  },
  {
    usuario: 'luisa',
    email: 'luisa@gmail.com',
    senha: '2ewdw',
    dataCriacao: new Date(2018 - 11 - 18),
    cpf: '38876689052',
    telefone: '23938274935',
    endereco: {
      bairro: 'sao luiz',
      rua: 'd',
      numero: '5',
      complemento: '',
      cep: '41515012',
      cidade: 'rio de janeiro',
      uf: 'rj',
    },
  },
  {
    usuario: 'clara',
    email: 'clara@gmail.com',
    senha: '2ewdw',
    dataCriacao: new Date(2018 - 11 - 18),
    cpf: '78876689652',
    telefone: '23948274938',
    endereco: {
      bairro: 'sao luiz',
      rua: 'd',
      numero: '7',
      complemento: '',
      cep: '41515012',
      cidade: 'rio de janeiro',
      uf: 'rj',
    },
  },
]);

console.log(contas);
