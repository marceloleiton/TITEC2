import express from 'express';
import solicitudRoutes from './routes/solicitud';
import cors from 'cors';
import morgan from 'morgan';
const app = express();

app.use(express.json())
app.use(cors());//conectar aplicaciones de backend o servidor puede responder
app.use(morgan('dev'));
app.use(solicitudRoutes)

export default app;