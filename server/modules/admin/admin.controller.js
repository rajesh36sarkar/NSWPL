import asyncHandler from '../../utils/asyncHandler.js';
import ApiResponse from '../../utils/ApiResponse.js';
import generateToken from '../../utils/generateToken.js';
import adminService from './admin.service.js';

export const loginAdmin = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  const admin = await adminService.authenticateAdmin(email, password);
  res.json({
    _id: admin._id,
    name: admin.name,
    email: admin.email,
    role: admin.role,
    token: generateToken(admin._id, admin.role),
  });
});

export const getAdminProfile = asyncHandler(async (req, res) => {
  const admin = await adminService.getAdminById(req.user.id);
  ApiResponse.success(res, 'Profile retrieved', admin);
});