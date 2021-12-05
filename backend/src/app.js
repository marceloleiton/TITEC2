import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import swaggerJSDoc from 'swagger-jsdoc';
import swaggerUI from 'swagger-ui-express';
import { options } from './swaggerOptions';

const specs = swaggerJSDoc(options); 

import solicitudRoutes from './routes/solicitud';

const app = express();

app.use(express.json())
app.use(cors());//conectar aplicaciones de backend o servidor puede responder
app.use(morgan('dev'));
app.use(solicitudRoutes)
app.use('/docs',swaggerUI.serve , swaggerUI.setup(specs));

export default app;