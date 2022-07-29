import mongoose from 'mongoose';
require('dotenv').config();

const dbUser = process.env.DB_USER;
const dbPass = process.env.DB_PASS;

//onst dbUri = `mongodb+srv://${dbUser}:${dbPass}@cluster0.xmkj6.mongodb.net/?retryWrites=true&w=majority`;
//{ user: process.env.MONGO_USER, pass: process.env.MONGO_PASSWORD, useNewUrlParser: true, useUnifiedTopology: true }

async function connect() {
  try {
    await mongoose.connect(
      'mongodb+srv://cluster0.xmkj6.mongodb.net/?retryWrites=true&w=majority',
      {
        user: process.env.DB_USER,
        pass: process.env.DB_PASS,
        bufferCommands: false,
      },
    );
    console.log('change url- new user');
    console.log('db connected');
  } catch (e) {
    console.log('fail to connect' + e);
  }
}

export default connect;

//async function connect() {
//try {
//await mongoose.connect(
//'mongodb+srv://cluster0.xmkj6.mongodb.net/?retryWrites=true&w=majority',
//{ user: process.env.DB_USER, pass: process.env.DB_PASS },
//);
//console.log('change url- new user');
//console.log('db connected');
//} catch (e) {
// console.log('fail to connect' + e);
// }
//}
