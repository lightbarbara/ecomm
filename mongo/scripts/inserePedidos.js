use('ecomm');

const orders = db.orders.insertMany([
  {
    dataPedido: new Date('2023-07-06'),
    account: {
      accountId: ObjectId('647f76257c4bc01e571d54df'),
      usuario: 'barbara',
    },
    enderecoEntrega: {
      bairro: 'sao luiz',
      rua: 'd',
      numero: '2',
      cep: '41515012',
      cidade: 'rio de janeiro',
      uf: 'rj',
    },
    itens: [
      {
        productId: ObjectId('6478bdd1f9e17a87a2774bf4'),
        quantity: -1,
        discount: NumberDecimal(20),
        precoUnitario: NumberDecimal(30),
      },
    ],
  },
  {
    dataPedido: new Date('2023-07-06'),
    account: {
      accountId: ObjectId('647f76257c4bc01e571d54e0'),
      usuario: 'felicia',
    },
    enderecoEntrega: {
      bairro: 'sao luiz',
      rua: 'd',
      numero: '2',
      cep: '41515012',
      cidade: 'rio de janeiro',
      uf: 'rj',
    },
    itens: [
      {
        productId: ObjectId('6478bdd1f9e17a87a2774bf4'),
        quantity: 6,
        precoUnitario: NumberDecimal(30),
      },
    ],
  },
]);

console.log(orders);
