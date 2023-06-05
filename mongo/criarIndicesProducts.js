use('ecomm')

const nameIndex = db.products.createIndex({nome: 1})
const priceIndex = db.products.createIndex({preco: 1})
const categoryIndex = db.products.createIndex({categoria: 1})

console.log(nameIndex)
console.log(priceIndex)
console.log(categoryIndex)