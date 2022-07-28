import mongoose from 'mongoose';
import config from 'config';

async function connect() {
  const dbUri = config.get<string>('dbUri');

  try {
    await mongoose.connect(dbUri);
    console.log('db connected');
  } catch (e) {
    console.log('fail to connect' + e);
  }
}

export default connect;
