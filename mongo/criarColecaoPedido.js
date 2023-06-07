use('ecomm')

db.createCollection('orders', {
    validator: {
        $jsonSchema: {
            title: 'orders',
            description: 'orders list',
            bsonType: 'object',
            required: ['_id', 'dataPedido', 'account', 'enderecoEntrega', 'itens'],
            additionalProperties: false,
            properties: {
                _id: {
                    bsonType: 'objectId',
                    description: 'id must be an objectId'
                },
                dataPedido: {
                    bsonType: 'date',
                    description: 'dataPedido must be a date'
                },
                account: {
                    bsonType: 'object',
                    description: 'account details',
                    required: ['accountId', 'usuario'],
                    additionalProperties: false,
                    properties: {
                        accountId: {
                            bsonType: 'objectId',
                            description: 'id must be an objectId'
                        },
                        usuario: {
                            bsonType: 'string',
                            minLength: 5,
                            description: 'usuario must be a string and have minimum length = 5'
                        }
                    }
                },
                enderecoEntrega: {
                    bsonType: 'object',
                    description: 'address details',
                    required: ['bairro', 'rua', 'numero', 'cep', 'cidade', 'uf'],
                    additionalProperties: false,
                    properties: {
                        bairro: {
                            bsonType: 'string',
                            minLength: 1,
                            description: 'bairro must be a string and have minimum length = 1'
                        },
                        rua: {
                            bsonType: 'string',
                            minLength: 1,
                            description: 'rua must be a string and have minimum length = 1'
                        },
                        numero: {
                            bsonType: 'string',
                            pattern: '^[0-9]{1,}$',
                            description: 'numero must be a string and have minimum length = 1'
                        },
                        complemento: {
                            bsonType: 'string',
                            description: 'complemento must be a string'
                        },
                        cep: {
                            bsonType: 'string',
                            pattern: '^[0-9]{8}$',
                            description: 'cep must be a string of 8 numbers'
                        },
                        cidade: {
                            bsonType: 'string',
                            minLength: 5,
                            description: 'cidade must be a string and have minimum length = 5'
                        },
                        uf: {
                            bsonType: 'string',
                            pattern: '^[a-z]{2}$',
                            description: 'uf must be a string of 2 letters'
                        }
                    }
                },
                itens: {
                    bsonType: 'array',
                    description: 'itens must contain at least one item with its id, quantity, discount and price',
                    minItems: 1,
                    items: {
                        bsonType: 'object',
                        description: 'an item must contain productId, quantity, discount and price',
                        required: ['productId', 'quantity', 'precoUnitario'],
                        additionalProperties: false,
                        properties: {
                            productId: {
                                bsonType: 'objectId',
                                description: 'productId must be an objectId'
                            },
                            quantity: {
                                bsonType: 'int',
                                minimum: 1,
                                description: 'quantity must be an int greater than or equal to 1'
                            },
                            discount: {
                                bsonType: 'int',
                                minimum: 0,
                                description: 'discount must be an int greater than or equal to 0'
                            },
                            precoUnitario: {
                                bsonType: 'decimal',
                                minimum: 0,
                                description: 'precoUnitario must be a decimal greater than or equal to 0'
                            }
                        }
                    }
                }
            }
        }
    }
})