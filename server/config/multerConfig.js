// server/config/multerConfig.js
import multer from 'multer';
import { CloudinaryStorage } from 'multer-storage-cloudinary';
import { v2 as cloudinary } from 'cloudinary';

// Create a storage engine
const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: 'stationery-products', // The folder name in your Cloudinary media library
    allowed_formats: ['jpg', 'jpeg', 'png', 'webp'], // Allowed file types
    transformation: [{ width: 1000, height: 1000, crop: 'limit' }], // Optional: resize images on upload
  },
});

const upload = multer({ storage: storage });

export default upload;