import express from 'express';
import ProductController from '../controllers/productsController.js';

const router = express.Router();

router.get('/api/products', ProductController.listProducts);
router.post('/api/admin/products', ProductController.createProduct);
router.get('/api/products/:id', ProductController.getProductById);
router.patch('/api/admin/products/:id', ProductController.updateProduct);
router.delete('/api/admin/products/:id', ProductController.deleteProduct);

export default router;
