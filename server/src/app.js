import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import compression from 'compression';
import rateLimit from 'express-rate-limit';
import configureCloudinary from './config/cloudinary.js';
import routes from './routes/index.js';
import { notFound, errorHandler } from './middleware/errorMiddleware.js';
import { requestId } from './middleware/requestId.js';

configureCloudinary();

const app = express();

// Request ID (should be first)
app.use(requestId);

app.use(helmet());

// Improved CORS
app.use(cors({
  origin: process.env.CLIENT_URL || 'http://localhost:5173',
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH'],
  allowedHeaders: ['Content-Type', 'Authorization'],
}));

// Rate limiting
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // limit each IP to 100 requests per windowMs
  standardHeaders: true,
  legacyHeaders: false,
});
app.use('/api/', limiter);

app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true, limit: '10mb' }));
app.use(compression());

// Logging (with request ID in development)
if (process.env.NODE_ENV === 'development') {
  morgan.token('id', (req) => req.id || '-');
  app.use(morgan(':id :method :url :status :response-time ms'));
}

// API Routes
app.use('/api', routes);

// Health check
app.get('/health', (req, res) => {
  res.status(200).json({ 
    status: 'OK', 
    timestamp: new Date().toISOString(),
    environment: process.env.NODE_ENV 
  });
});

// Error handling
app.use(notFound);
app.use(errorHandler);

export default app;