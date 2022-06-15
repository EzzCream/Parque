import express from 'express';
import * as Gestor from '../controllers/gestor.controllers.js';

const router = express.Router();

router.post('/addGestor', Gestor.addGestor);

router.post('/editGestor', Gestor.editGestor);

router.get('/crear', Gestor.renderaddGestor);

router.get('/actualizar', Gestor.renderEditGestor);

export default router;
