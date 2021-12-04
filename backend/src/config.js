import {config as dotenv} from 'dotenv';

//dotenv lee las variables de entorno 
dotenv();

export const config = {
    host: proces.env.DB_HOST,
    user: proces.env.DB_USER,
    password: proces.env.DB_PASSWORD,
    database: proces.env.DB_DATABASE,
    port: proces.env.DB_PORT
}