import { config as dotenv } from 'dotenv';
//dotenv lee las variables de entorno 
dotenv();

export const config = {
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    port: process.env.DB_PORT,
};