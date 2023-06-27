import express from 'express';
import categoriesRouter from './categoriesRoutes.js';
import productsRouter from './productsRoutes.js';

const routes = (app) => {
  app.route('/').get((req, res) => {
    res.status(200).send('ok');
  });

  app.use(
    express.json(),
    categoriesRouter,
    productsRouter,
  );
};

export default routes;
