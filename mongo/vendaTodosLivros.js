use('ecomm')

const books = db.products.updateMany({categoria: 'LIVROS'}, {$set: {estoque: 0}})

console.log(books)