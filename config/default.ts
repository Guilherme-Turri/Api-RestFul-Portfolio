require('dotenv').config();

const dbUser = process.env.DB_USER;
const dbPass = process.env.DB_PASS;

export default {
  dbUri: `mongodb+srv://${dbUser}:${dbPass}@cluster0.xmkj6.mongodb.net/?retryWrites=true&w=majority`,
};
