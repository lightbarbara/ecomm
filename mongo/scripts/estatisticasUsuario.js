use('ecomm');

const orders = db.orders.aggregate([
  { $match: { 'account.usuario': 'barbara' } },
  { $unwind: '$itens' },
  {
    $group: {
      _id: '$_id',
      somaQuantidades: { $sum: '$itens.quantity' },
      montantePedidos: { $sum: { $multiply: [{ $toInt: '$itens.precoUnitario' }, '$itens.quantity'] } },
      montanteDesconto: { $sum: { $toInt: '$itens.discount' } },
    },
  },
]);

console.log(orders);
