import asyncHandler from "../../utils/asyncHandler.js";
import ApiResponse from "../../utils/ApiResponse.js";
import productService from "./product.service.js";
import { upload } from "../../utils/cloudinaryUpload.js";

export const getProducts = asyncHandler(async (req, res) => {
  const result = await productService.getAllProducts(req.query);
  ApiResponse.success(res, "Products retrieved successfully", result);
});

export const getProduct = asyncHandler(async (req, res) => {
  const product = await productService.getProductById(req.params.id);
  ApiResponse.success(res, "Product retrieved successfully", product);
});

export const createProduct = asyncHandler(async (req, res) => {
  upload.array("images", 5)(req, res, async (err) => {
    if (err) {
      console.error("❌ Upload error:", err);
      return ApiResponse.error(res, "Image upload failed", err.message, 400);
    }

    console.log("✅ Upload success, files:", req.files?.length || 0);

    try {
      const images =
        req.files && req.files.length > 0
          ? req.files.map((file) => ({
              public_id: file.filename || file.public_id,
              url: file.path,
            }))
          : [];

      const productData = {
        ...req.body,
        images,
        price: Number(req.body.price),
        stockCount: req.body.stockCount ? Number(req.body.stockCount) : 0,
        inStock: req.body.inStock === "true" || req.body.inStock === true,
        featured: req.body.featured === "true" || req.body.featured === true,
      };

      const product = await productService.createProduct(productData);
      ApiResponse.success(res, "Product created successfully", product, 201);
    } catch (error) {
      console.error("Product creation error:", error);
      ApiResponse.error(res, error.message, null, 400);
    }
  });
});

export const updateProduct = asyncHandler(async (req, res) => {
  const product = await productService.updateProduct(req.params.id, req.body);
  ApiResponse.success(res, "Product updated successfully", product);
});

export const deleteProduct = asyncHandler(async (req, res) => {
  const result = await productService.deleteProduct(req.params.id);
  ApiResponse.success(res, result.message);
});