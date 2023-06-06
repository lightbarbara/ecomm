use('ecomm')

db.createCollection('accounts', {
    validator: {
        $jsonSchema: {
            title: 'accounts',
            description: 'accounts list',
            type: 'object',
            required: ['_id', 'usuario', 'email', 'senha', 'dataCriacao', 'cpf', 'telefone', 'endereco'],
            additionalProperties: false,
            properties: {
                _id: {
                    bsonType: 'objectId',
                    description: 'id must be a string'
                },
                usuario : {
                    type: 'string',
                    minLength: 5,
                    description: 'usuario must be a string and have minimum length = 5'
                },
                email: {
                    type: 'string',
                    minLength: 5,
                    description: 'email must be a string and have minimum length = 5'
                },
                senha: {
                    type: 'string',
                    minLength: 5,
                    description: 'senha must be a string and have minimum length = 5'
                },
                dataCriacao: {
                    bsonType: 'date',
                    description: 'dataCriacao must be a date'
                },
                cpf: {
                    type: 'string',
                    pattern: '^[0-9]{11}$',
                    description: 'cpf must be a string of 11 numbers'
                },
                telefone: {
                    type: 'string',
                    pattern: '^[0-9]{10,}$',
                    description: 'telefone must be a string of numbers and have minimum length = 10'
                },
                endereco: {
                    type: 'object',
                    description: 'address details',
                    required: ['bairro', 'rua', 'numero', 'cep', 'cidade', 'uf'],
                    additionalProperties: false,
                    properties: {
                        bairro: {
                            type: 'string',
                            minLength: 1,
                            description: 'bairro must be a string and have minimum length = 1'
                        },
                        rua: {
                            type: 'string',
                            minLength: 1,
                            description: 'rua must be a string and have minimum length = 1'
                        },
                        numero: {
                            type: 'string',
                            pattern: '^[0-9]{1,}$',
                            description: 'numero must be a string and have minimum length = 1'
                        },
                        complemento: {
                            type: 'string',
                            description: 'complemento must be a string'
                        },
                        cep: {
                            type: 'string',
                            pattern: '^[0-9]{8}$',
                            description: 'cep must be a string of 8 numbers'
                        },
                        cidade: {
                            type: 'string',
                            minLength: 5,
                            description: 'cidade must be a string and have minimum length = 5'
                        },
                        uf: {
                            type: 'string',
                            pattern: '^[a-z]{2}$',
                            description: 'uf must be a string of 2 letters'
                        }
                    }
                }
            }
        }
    }
})