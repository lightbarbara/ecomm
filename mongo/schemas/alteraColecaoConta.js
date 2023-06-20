use('ecomm');

const validation = db.runCommand({
  collMod: 'accounts',
  validator: {
    $jsonSchema: {
      title: 'accounts',
      description: 'accounts list',
      bsonType: 'object',
      required: ['_id', 'usuario', 'email', 'senha', 'dataCriacao', 'cpf', 'telefone', 'endereco'],
      additionalProperties: false,
      properties: {
        _id: {
          bsonType: 'objectId',
          description: 'id must be an objectId',
        },
        usuario: {
          bsonType: 'string',
          minLength: 5,
          description: 'usuario must be a string and have minimum length = 5',
        },
        email: {
          bsonType: 'string',
          minLength: 5,
          pattern: '^\\w+([\\.-]?\\w+)@\\w+([\\.-]?\\w+)(\\.\\w{2,3})+$',
          description: 'email must be a valid email and have minimum length = 5',
        },
        senha: {
          bsonType: 'string',
          minLength: 5,
          description: 'senha must be a string and have minimum length = 5',
        },
        dataCriacao: {
          bsonType: 'date',
          description: 'dataCriacao must be a date',
        },
        cpf: {
          bsonType: 'string',
          pattern: '^[0-9]{11}$',
          description: 'cpf must be a string of 11 numbers',
        },
        telefone: {
          bsonType: 'string',
          pattern: '^[0-9]{10,}$',
          description: 'telefone must be a string of numbers and have minimum length = 10',
        },
        endereco: {
          bsonType: 'object',
          description: 'address details',
          required: ['bairro', 'rua', 'numero', 'cep', 'cidade', 'uf'],
          additionalProperties: false,
          properties: {
            bairro: {
              bsonType: 'string',
              minLength: 1,
              description: 'bairro must be a string and have minimum length = 1',
            },
            rua: {
              bsonType: 'string',
              minLength: 1,
              description: 'rua must be a string and have minimum length = 1',
            },
            numero: {
              bsonType: 'string',
              pattern: '^d{1}|[S/N]',
              description: 'numero must be a string and have minimum length = 1',
            },
            complemento: {
              bsonType: 'string',
              description: 'complemento must be a string',
            },
            cep: {
              bsonType: 'string',
              pattern: '^[0-9]{8}$',
              description: 'cep must be a string of 8 numbers',
            },
            cidade: {
              bsonType: 'string',
              minLength: 5,
              description: 'cidade must be a string and have minimum length = 5',
            },
            uf: {
              bsonType: 'string',
              enum: ['AC', 'AL', 'AP', 'AM', 'BA', 'CE', 'DF', 'ES', 'GO', 'MA', 'MT', 'MS', 'MG', 'PA', 'PB', 'PR', 'PE', 'PI', 'RJ', 'RN', 'RS', 'RO', 'RR', 'SC', 'SP', 'SE', 'TO',
              ],
              description: 'uf must be a valid uf and a string of 2 letters',
            },
          },
        },
      },
    },
  },
});

console.log(validation);
