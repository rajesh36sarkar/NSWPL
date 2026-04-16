import express from 'express';
import {
  getProducts,
  getProduct,
  createProduct,
  updateProduct,
  deleteProduct,
} from './product.controller.js';
import { protect, admin } from '../../middleware/authMiddleware.js';
import { validateProduct } from './product.validation.js';
import validateMiddleware from '../../middleware/validateMiddleware.js';

const router = express.Router();

router.get('/', getProducts);
router.get('/:id', getProduct);

router.post('/', protect, admin,  createProduct);
router.put('/:id', protect, admin, updateProduct);
router.delete('/:id', protect, admin, deleteProduct);

export default router;


// validateProduct, validateMiddleware,