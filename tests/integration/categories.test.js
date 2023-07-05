import request from 'supertest';
import { describe, expect, it } from '@jest/globals';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import app from '../../src/app.js';
import categories from '../../src/models/Category.js';

dotenv.config();

let server;

beforeAll(() => {
  server = app.listen(process.env.PORT);
});

beforeEach(async () => {
  await categories.deleteMany();
});

afterAll(() => {
  server.close();
});

// describe('GET /api/categories', () => {
//   const objectCategory = {
//     nome: 'CASA',
//     status: 'ATIVA',
//   };

//   it('it should return an empty list if the collection has no register', async () => {
//     const result = await request(app).get('/api/categories');

//     expect(result.status).toBe(200);
//     expect(result.body).toEqual([]);
//   });

//   it('it should return a list of categories', async () => {
//     await request(app).post('/api/admin/categories').send(objectCategory);
//     const category = await request(app).get('/api/categories');

//     expect(category.status).toBe(200);
//     expect(category.body).toEqual([{
//       __v: expect.any(Number),
//       _id: expect.any(String),
//       ...objectCategory,
//     }]);
//   });
// });

// describe('GET /api/categories/:id', () => {
//   const objectCategory = {
//     nome: 'CASA',
//     status: 'ATIVA',
//   };

//   it('it shouldnt return a category if its id doesnt exist', async () => {
//     const id = new mongoose.Types.ObjectId();
//     const category = await request(app).get(`/api/categories/${id}`);

//     expect(category.status).toBe(404);
//   });

//   it('it should return a category by its id', async () => {
//     const category = await request(app).post('/api/admin/categories').send(objectCategory);
//     const getCategory = await request(app).get(`/api/categories/${category.body._id}`);

//     expect(getCategory.status).toBe(200);
//     expect(getCategory.body).toEqual(
//       expect.objectContaining({
//         _id: expect.any(String),
//         ...objectCategory,
//       }),
//     );
//   });
// });

// describe('POST /api/admin/categories', () => {
//   const objectCategory = {
//     nome: 'CASA',
//     status: 'ATIVA',
//   };

//   it('it shouldnt create a category if theres no body', async () => {
//     const category = await request(app).post('/api/admin/categories').send({});

//     expect(category.status).toBe(422);
//   });

//   it('it should return a category after you create one', async () => {
//     const category = await request(app).post('/api/admin/categories').send(objectCategory);

//     expect(category.status).toBe(201);
//     expect(category.body).toEqual(
//       expect.objectContaining({
//         _id: expect.any(String),
//         ...objectCategory,
//       }),
//     );
//   });
// });

// describe('PATCH /api/admin/categories/:id', () => {
//   const objectCategory = {
//     nome: 'CASA',
//     status: 'ATIVA',
//   };

//   it('it shouldnt update category if its id doesnt exist', async () => {
//     const id = new mongoose.Types.ObjectId();
//     const category = await request(app).patch(`/api/admin/categories/${id}`).send(objectCategory);

//     expect(category.status).toBe(404);
//   });

//   it('it shouldnt update category if its body is incorrect', async () => {
//     const category = await request(app).post('/api/admin/categories').send(objectCategory);
//     const updateCategory = await request(app).patch(`/api/admin/categories/${category.body._id}`).send({ name: 'CARRO' });

//     expect(updateCategory.status).toBe(422);
//   });

//   it('it should update category', async () => {
//     const category = await request(app).post('/api/admin/categories').send(objectCategory);
//     const updateCategory = await request(app).patch(`/api/admin/categories/${category.body._id}`).send({ nome: 'CARRO' });

//     expect(updateCategory.status).toBe(200);
//     expect(updateCategory.body).toEqual(
//       expect.objectContaining({
//         _id: expect.any(String),
//         nome: 'CARRO',
//         status: 'ATIVA',
//       }),
//     );
//   });
// });

// describe('DELETE /api/admin/categories/:id', () => {
//   const objectCategory = {
//     nome: 'CASA',
//     status: 'ATIVA',
//   };

//   it('it shouldnt delete category if its id doesnt exist', async () => {
//     const id = new mongoose.Types.ObjectId();
//     const category = await request(app).delete(`/api/admin/categories/${id}`);

//     expect(category.status).toBe(404);
//   });

//   it('it should delete category', async () => {
//     const category = await request(app).post('/api/admin/categories').send(objectCategory);
//     const deleteCategory = await request(app).delete(`/api/admin/categories/${category.body._id}`);

//     expect(deleteCategory.status).toBe(204);
//     expect(deleteCategory.body).toEqual({});
//   });
// });

// describe('PATCH /api/admin/categories/:id/activate', () => {
//   const objectCategory = {
//     nome: 'CASA',
//     status: 'INATIVA',
//   };

//   it('it shouldnt activate category if its id doesnt exist', async () => {
//     const id = new mongoose.Types.ObjectId();
//     const category = await request(app).patch(`/api/admin/categories/${id}/activate`);

//     expect(category.status).toBe(404);
//   });

//   it('it should activate category', async () => {
//     const category = await request(app).post('/api/admin/categories').send(objectCategory);
//     const activateCategory = await request(app).patch(`/api/admin/categories/${category.body._id}/activate`);

//     expect(activateCategory.status).toBe(200);
//     expect(activateCategory.body).toEqual(
//       expect.objectContaining({
//         _id: expect.any(String),
//         ...objectCategory,
//         status: 'ATIVA',
//       }),
//     );
//   });
// });
