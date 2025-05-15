// config.js
import dotenv from 'dotenv';
dotenv.config();

export const PORT = process.env.PORT || 5000;
export const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/db';
export const JWT_SECRET = process.env.JWT_SECRET || 'sua_chave_secreta';
export const NODE_ENV = process.env.NODE_ENV || 'development';
