import express from 'express'
import userRoutes from './routes/userRoutes'
import morgan from 'morgan'
import cors from 'cors'

const app = express();
app.set('port', 9000);
app.use(morgan('dev'));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:false}))

app.use(userRoutes);

export default app;
