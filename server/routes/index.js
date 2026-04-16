import express from 'express';
import productRoutes from '../modules/product/product.routes.js';
import adminRoutes from '../modules/admin/admin.routes.js';
import contactRoutes from '../modules/contact/contact.routes.js';

const router = express.Router();

const defaultRoutes = [
  { path: '/products', route: productRoutes },
  { path: '/admin', route: adminRoutes },
  { path: '/contact', route: contactRoutes },
];

defaultRoutes.forEach((route) => {
  router.use(route.path, route.route);
});

export default router;