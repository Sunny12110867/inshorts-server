import express from 'express';
import Connection from './datatbase/db.js';
import DefaultData from './default.js'
import Route from './routes/route.js';
import cors from 'cors';
import dotenv from 'dotenv';


const app = express();
dotenv.config();
app.use(cors());
app.use('/', Route);

const PORT = process.env.PORT||8000;





Connection();
app.listen(PORT, ()=> console.log(`server is runnings succefully on port ${PORT}`));

DefaultData();   

