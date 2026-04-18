import express from 'express';
import upload from '../../config/multerConfig.js';
import {
  getProducts,
  getProduct,
  createProduct,
  updateProduct,
  deleteProduct,
} from './product.controller.js';
import { protect, admin } from '../../middleware/authMiddleware.js';

const router = express.Router();

router.get('/', getProducts);
router.get('/:id', getProduct);

// Multer middleware applied here (before controller)
router.post('/', protect, admin, upload.array('images', 5), createProduct);
router.put('/:id', protect, admin, upload.array('images', 5), updateProduct);
router.delete('/:id', protect, admin, deleteProduct);

export default router;