import express from 'express';
import solicitudRoutes from './routes/solicitud';

const app = express();

app.use(express.json())
app.use(solicitudRoutes)
export default app;