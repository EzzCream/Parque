import express from 'express';
import * as Parque from '../controllers/parque.controllers.js';

const router = express.Router();

router.delete('/deleteParque', Parque.deleteParque);

router.get('/readParque', Parque.readParque);

router.post('/addParque', Parque.addParque);

router.put('/updateParque', Parque.editParque);

export default router;
