import express from 'express';
import { loginAdmin, getAdminProfile } from './admin.controller.js';
import { protect, admin } from '../../middleware/authMiddleware.js';

const router = express.Router();

router.post('/login', loginAdmin);
router.get('/profile', protect, admin, getAdminProfile);

export default router;