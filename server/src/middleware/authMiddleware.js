import jwt from 'jsonwebtoken';
import asyncHandler from '../utils/asyncHandler.js';
import ApiResponse from '../utils/ApiResponse.js';
import Admin from '../modules/admin/admin.model.js';

export const protect = asyncHandler(async (req, res, next) => {
  let token;
  if (req.headers.authorization?.startsWith('Bearer')) {
    token = req.headers.authorization.split(' ')[1];
  }
  if (!token) {
    return ApiResponse.error(res, 'Not authorized, no token', null, 401);
  }
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = await Admin.findById(decoded.id).select('-password');
    next();
  } catch (error) {
    return ApiResponse.error(res, 'Not authorized, token failed', null, 401);
  }
});

export const admin = (req, res, next) => {
  if (req.user && (req.user.role === 'admin' || req.user.role === 'superadmin')) {
    next();
  } else {
    ApiResponse.error(res, 'Not authorized as admin', null, 403);
  }
};