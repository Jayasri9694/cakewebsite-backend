import express from 'express';
import { getCakes, addCake, getCakeById } from '../controllers/cakeController.js';

const router = express.Router();

router.get('/', getCakes);
router.post('/', addCake);
router.get('/:id', getCakeById);

export default router;
