import express from 'express';
import morgan from 'morgan';
//Routes
import router from './router';
const cors = require('cors')

const app = express();

app.set("port",4000);

app.use(morgan('dev'));
app.use(express.json());
app.use(cors())

app.use(router);
export default app;