import express from 'express';
import router from './router';
import connect from './db';
import cors from 'cors';

const app = express();
const corsPermission = cors();
app.use(corsPermission);
app.use(express.json());
app.use('/', router);

const port = process.env.PORT || 3000;

app.listen(port, async () => {
  await connect();
  console.log('app working at ' + port);
});
