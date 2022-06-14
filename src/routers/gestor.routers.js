import express from 'express';
import * as Gestor from '../controllers/gestor.controllers.js';

const router = express.Router();

router.get('/readGestor', Gestor.readGestor);

export default router;
