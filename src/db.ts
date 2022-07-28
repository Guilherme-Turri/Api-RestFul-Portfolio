import mongoose from 'mongoose';
require('dotenv').config();

const dbUser = process.env.DB_USER;
const dbPass = process.env.DB_PASS;

async function connect() {
  const dbUri = `mongodb+srv://${dbUser}:${dbPass}@cluster0.xmkj6.mongodb.net/?retryWrites=true&w=majority`;
  try {
    await mongoose.connect(dbUri);
    console.log('auu');
    console.log('db connected');
  } catch (e) {
    console.log('fail to connect' + e);
  }
}

export default connect;
