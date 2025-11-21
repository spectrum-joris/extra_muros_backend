import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import tripRoutes from './routes/trips.js';
import moduleRoutes from './routes/modules.js';
import contentItemRoutes from './routes/contentItems.js';
import { authMiddleware } from './utils/authMiddleware.js';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// Routes met auth
app.use('/api/trips', authMiddleware, tripRoutes);
app.use('/api/modules', authMiddleware, moduleRoutes);
app.use('/api/contentItems', authMiddleware, contentItemRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
