import express from 'express';
import { createContentItem, getContentItems } from '../controllers/contentItemController.js';

const router = express.Router();

router.post('/', createContentItem);
router.get('/', getContentItems);

export default router;
