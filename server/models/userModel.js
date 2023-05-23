const mongoose = require('mongoose');

const MONGO_URI = '?????'

mongoose.connect(MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  // sets the name of the DB that our collections are part of
  dbName: 'techstackproject-pv'
})
  .then(() => console.log('Connected to Mongo DB.'))
  .catch(err => console.log(err));

const userSchema = new mongoose.Schema({
  username: { type: String, required: true },
  password: { type: String, required: true },
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  techStack: { type: Array },
})

module.exports = mongoose.model('User', userSchema);