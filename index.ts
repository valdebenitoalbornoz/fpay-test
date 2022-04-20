import dotenv from 'dotenv';
import { Api } from './src/app';

dotenv.config();

const api = new Api();
api.start();