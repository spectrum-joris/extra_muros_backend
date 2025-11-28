// backend/server.js
import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';

import tripRoutes from './routes/trips.js';
import moduleRoutes from './routes/modules.js';
import contentItemRoutes from './routes/contentItems.js';
import authRoutes from './routes/auth.js';
import { authMiddleware } from './utils/authMiddleware.js';

dotenv.config();

const app = express();

// Nodig om __dirname te krijgen in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Frontend statisch serveren
const frontendPath = path.join(__dirname, '..', 'frontend');
app.use(express.static(frontendPath));

app.use(cors());
app.use(express.json());

// Publieke routes (geen auth)
app.use('/api/auth', authRoutes);

// Beschermde API routes
app.use('/api/trips', authMiddleware, tripRoutes);
app.use('/api/modules', authMiddleware, moduleRoutes);
app.use('/api/contentItems', authMiddleware, contentItemRoutes);

// Root -> index.html
app.get('/', (req, res) => {
  res.sendFile(path.join(frontendPath, 'index.html'));
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  console.log(`Server running "http://localhost:5000" `);
});
