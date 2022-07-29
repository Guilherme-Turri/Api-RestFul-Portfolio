import mongoose from 'mongoose';
require('dotenv').config();

const DB_USER = process.env.DB_USER;
const DB_PASS = process.env.DB_PASS;

async function connect() {
  try {
    await mongoose.connect(
      'mongodb+srv://cluster0.xmkj6.mongodb.net/?retryWrites=true&w=majority',
      {
        user: DB_USER,
        pass: DB_PASS,
      },
    );

    console.log('db connected');
  } catch (e) {
    console.log('fail to connect' + e);
  }
}

export default connect;
