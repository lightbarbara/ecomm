import request from 'supertest';
import { describe, expect, it } from '@jest/globals';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import app from '../../src/app.js';
import products from '../../src/models/Product.js';
import categories from '../../src/models/Category.js';

dotenv.config();

let server;

beforeAll(() => {
  server = app.listen(5001);
});

beforeEach(async () => {
  await categories.deleteMany();
  await products.deleteMany();
});

afterAll(() => {
  server.close();
});

describe('GET /api/products', () => {
  const objectCategory = {
    nome: 'CASA',
    status: 'ATIVA',
  };

  const objectProduct = {
    nome: 'toalha',
    descricao: 'para secar',
    slug: 'oajsdiwj21i3',
    preco: 23,
    estoque: 3,
    categoria: '',
  };

  it('it should return an empty list if the collection has no register', async () => {
    const result = await request(app).get('/api/products');

    expect(result.status).toBe(200);
    expect(result.body).toEqual([]);
  });

  it('it should return a list of products', async () => {
    const category = await request(app).post('/api/admin/categories').send(objectCategory);
    delete category.body.__v;

    objectProduct.categoria = category.body._id;

    await request(app).post('/api/admin/products').send(objectProduct);
    const product = await request(app).get('/api/products');

    expect(product.status).toBe(200);
    expect(product.body).toEqual([{
      __v: expect.any(Number),
      _id: expect.any(String),
      ...objectProduct,
      preco: { $numberDecimal: `${objectProduct.preco}` },
      categoria: category.body,
    }]);
  });
});

describe('GET /api/products/:id', () => {
  const objectCategory = {
    nome: 'CASA',
    status: 'ATIVA',
  };

  const objectProduct = {
    nome: 'toalha',
    descricao: 'para secar',
    slug: 'oajsdiwj21i3',
    preco: 23,
    estoque: 3,
    categoria: '',
  };

  it('it shouldnt return a product if its id doesnt exist', async () => {
    const id = new mongoose.Types.ObjectId();
    const product = await request(app).get(`/api/products/${id}`);

    expect(product.status).toBe(404);
  });

  it('it should return a product by its id', async () => {
    const category = await request(app).post('/api/admin/categories').send(objectCategory);
    delete category.body.__v;

    objectProduct.categoria = category.body._id;

    const product = await request(app).post('/api/admin/products').send(objectProduct);
    const getProduct = await request(app).get(`/api/products/${product.body._id}`);

    expect(getProduct.status).toBe(200);
    expect(getProduct.body).toEqual(
      expect.objectContaining({
        _id: expect.any(String),
        ...objectProduct,
        preco: { $numberDecimal: `${objectProduct.preco}` },
        categoria: category.body,
      }),
    );
  });
});

describe('POST /api/admin/products', () => {
  const objectCategory = {
    nome: 'CASA',
    status: 'ATIVA',
  };

  const objectProduct = {
    nome: 'toalha',
    descricao: 'para secar',
    slug: 'oajsdiwj21i3',
    preco: 23,
    estoque: 3,
    categoria: '',
  };

  it('it shouldnt create a product if theres no body', async () => {
    const product = await request(app).post('/api/admin/products').send({});

    expect(product.status).toBe(422);
  });

  it('it should return a product after you create one', async () => {
    const category = await request(app).post('/api/admin/categories').send(objectCategory);
    delete category.body.__v;

    objectProduct.categoria = category.body._id;

    const product = await request(app).post('/api/admin/products').send(objectProduct);

    expect(product.status).toBe(201);
    expect(product.body).toEqual(
      expect.objectContaining({
        _id: expect.any(String),
        ...objectProduct,
        preco: { $numberDecimal: `${objectProduct.preco}` },
      }),
    );
  });
});

describe('PATCH /api/admin/products/:id', () => {
  const objectCategory = {
    nome: 'CASA',
    status: 'ATIVA',
  };

  const objectProduct = {
    nome: 'toalha',
    descricao: 'para secar',
    slug: 'oajsdiwj21i3',
    preco: 23,
    estoque: 3,
    categoria: '',
  };

  it('it shouldnt update product if its id doesnt exist', async () => {
    const id = new mongoose.Types.ObjectId();
    const product = await request(app).patch(`/api/admin/products/${id}`).send(objectProduct);

    expect(product.status).toBe(404);
  });

  it('it shouldnt update product if its body is incorrect', async () => {
    const category = await request(app).post('/api/admin/categories').send(objectCategory);
    delete category.body.__v;

    objectProduct.categoria = category.body._id;

    const product = await request(app).post('/api/admin/products').send(objectProduct);
    const updateProduct = await request(app).patch(`/api/admin/products/${product.body._id}`).send({ name: 'CARRO' });

    expect(updateProduct.status).toBe(422);
  });

  it('it should update product', async () => {
    const category = await request(app).post('/api/admin/categories').send(objectCategory);
    delete category.body.__v;

    objectProduct.categoria = category.body._id;

    const product = await request(app).post('/api/admin/products').send(objectProduct);
    const updateProduct = await request(app).patch(`/api/admin/products/${product.body._id}`).send({ nome: 'colher' });

    expect(updateProduct.status).toBe(200);
    expect(updateProduct.body).toEqual(
      expect.objectContaining({
        _id: expect.any(String),
        ...objectProduct,
        nome: 'colher',
        preco: { $numberDecimal: `${objectProduct.preco}` },
        categoria: category.body,
      }),
    );
  });
});

describe('DELETE /api/admin/products/:id', () => {
  const objectCategory = {
    nome: 'CASA',
    status: 'ATIVA',
  };

  const objectProduct = {
    nome: 'toalha',
    descricao: 'para secar',
    slug: 'oajsdiwj21i3',
    preco: 23,
    estoque: 3,
    categoria: '',
  };

  it('it shouldnt delete product if its id doesnt exist', async () => {
    const id = new mongoose.Types.ObjectId();
    const product = await request(app).delete(`/api/admin/products/${id}`);

    expect(product.status).toBe(404);
  });

  it('it should delete product', async () => {
    const category = await request(app).post('/api/admin/categories').send(objectCategory);
    delete category.body.__v;

    objectProduct.categoria = category.body._id;

    const product = await request(app).post('/api/admin/products').send(objectProduct);
    const deleteProduct = await request(app).delete(`/api/admin/products/${product.body._id}`);

    expect(deleteProduct.status).toBe(204);
    expect(deleteProduct.body).toEqual({});
  });
});
