import express from 'express';
import dotenv from 'dotenv';
import RouterGestor from './routers/gestor.routers.js';
import RouterParque from './routers/parque.routers.js';
import cors from 'cors';

const app = express();

app.use(express.static('public'));

dotenv.config();

app.set('views', './src/views');
app.set('view engine', 'ejs');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use('/gestor', RouterGestor);
app.use('/parque', RouterParque);

const PORT = process.env.PORT || 8080;
const server = app.listen(PORT, () => {
	console.log(`----------------------------------------------`);
	console.log(`Server started on http://localhost:${PORT} ✨`);
	console.log(`----------------------------------------------`);
});
server.on('error', (err) => console.log(err));
