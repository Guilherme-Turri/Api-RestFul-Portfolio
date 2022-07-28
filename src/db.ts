import mongoose from 'mongoose';
require('dotenv').config();

const dbUser = process.env.DB_USER;
const dbPass = process.env.DB_PASS;
const dbUri = `mongodb+srv://${dbUser}:${dbPass}@cluster0.xmkj6.mongodb.net/?retryWrites=true&w=majority`;

async function connect() {
  try {
    await mongoose.connect(dbUri);
    console.log('change url- new user');
    console.log('db connected');
  } catch (e) {
    console.log('fail to connect' + e);
  }
}

export default connect;
