import { v2 as cloudinary } from 'cloudinary';

export const deleteFromCloudinary = async (publicId) => {
  try {
    const result = await cloudinary.uploader.destroy(publicId);
    console.log('✅ Cloudinary image deleted:', publicId);
    return result;
  } catch (error) {
    console.error('❌ Cloudinary Delete Error:', error);
    return null;
  }
};