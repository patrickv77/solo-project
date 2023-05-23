const mongoose = require('mongoose');

const bcrypt = require('bcryptjs')
const SALT_WORK_FACTOR = 10;

const MONGO_URI = 'mongodb+srv://pat:Uk9B6YKcIzbvQlFF@cluster0.3aacadl.mongodb.net/?retryWrites=true&w=majority'

mongoose.connect(MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  // sets the name of the DB that our collections are part of
  dbName: 'techstackprojectPV'
})
  .then(() => console.log('Connected to Mongo DB.'))
  .catch(err => console.log(err));

const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  techStack: { type: Array },
})


module.exports = mongoose.model('User', userSchema);