import express from 'express';
import CategoryController from '../controllers/categoriesController.js';

const router = express.Router();

router.get('/api/categories', CategoryController.listCategories);
router.post('/api/admin/categories', CategoryController.createCategory);
router.get('/api/categories/:id', CategoryController.getCategoryById);
router.patch('/api/admin/categories/:id', CategoryController.updateCategory);
router.delete('/api/admin/categories/:id', CategoryController.deleteCategory);
router.patch('/api/admin/categories/:id/activate', CategoryController.activateCategory);

export default router;
