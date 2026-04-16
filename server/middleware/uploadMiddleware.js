import { upload } from '../utils/cloudinaryUpload.js';

export const uploadProductImages = upload.array('images', 5);
export const uploadSingleImage = upload.single('image');