import { Router } from 'express';
import { analyzeURL } from '../controllers/analyzeUrlController.js';

const router = Router();
router.post('/', analyzeURL);

export default router;
