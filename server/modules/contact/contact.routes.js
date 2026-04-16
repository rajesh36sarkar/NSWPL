import express from 'express';
import {
  submitContact,
  getAllContacts,
  getContactById,
  markAsRead,
  deleteContact,
} from './contact.controller.js';
import { protect, admin } from '../../middleware/authMiddleware.js';

const router = express.Router();

// Public
router.post('/', submitContact);

// Admin only
router.get('/', protect, admin, getAllContacts);
router.get('/:id', protect, admin, getContactById);
router.patch('/:id/read', protect, admin, markAsRead);
router.delete('/:id', protect, admin, deleteContact);

export default router;