import express from 'express';
import solicitudRoutes from './routes/solicitud';

const app = express();

app.use(solicitudRoutes)
export default app;