import express from 'express';
import router from './router';
import connect from '../config/db';

const app = express();
app.use(express.json());
app.use('/', router);

const port = process.env.PORT || 3000;

app.listen(port, async () => {
  await connect();
  console.log('app working at ' + port);
});
