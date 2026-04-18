import Product from './product.model.js';
import { deleteFromCloudinary } from '../../utils/cloudinaryUpload.js';

class ProductService {
  async getAllProducts(query = {}) {
    const { category, featured, search, sort, page = 1, limit = 10 } = query;

    const filter = {};
    if (category) filter.category = category;
    if (featured !== undefined) filter.featured = featured === 'true';
    if (search) filter.name = { $regex: search, $options: 'i' };

    const sortOptions = sort ? { [sort.split(':')[0]]: sort.split(':')[1] === 'desc' ? -1 : 1 } : {};

    const pageNum = parseInt(page);
    const limitNum = parseInt(limit);
    const skip = (pageNum - 1) * limitNum;

    const [products, total] = await Promise.all([
      Product.find(filter).sort(sortOptions).limit(limitNum).skip(skip),
      Product.countDocuments(filter),
    ]);

    return {
      products,
      pagination: {
        total,
        page: pageNum,
        limit: limitNum,
        totalPages: Math.ceil(total / limitNum),
        hasNextPage: pageNum * limitNum < total,
        hasPrevPage: pageNum > 1,
      },
    };
  }

  async getProductById(id) {
    const product = await Product.findById(id);
    if (!product) throw new Error('Product not found');
    return product;
  }

  async createProduct(productData) {
    return await Product.create(productData);
  }

  async updateProduct(id, updateData) {
    const product = await Product.findByIdAndUpdate(id, updateData, { new: true, runValidators: true });
    if (!product) throw new Error('Product not found');
    return product;
  }

  async deleteProduct(id) {
    const product = await Product.findById(id);
    if (!product) throw new Error('Product not found');

    if (product.images?.length) {
      for (const img of product.images) {
        await deleteFromCloudinary(img.public_id);
      }
    }
    await product.deleteOne();
    return { message: 'Product deleted successfully' };
  }
}

export default new ProductService();