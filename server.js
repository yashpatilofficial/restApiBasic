import express from 'express';
import { APP_PORT } from './config'
import { listen } from 'express/lib/application';

const app = express();

app.listen(APP_PORT, ()=> console.log('Listening to port ${APP_PORT}.'))
