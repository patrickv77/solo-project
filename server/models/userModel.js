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
  learning: { type: String },
  techStack: { type: Array },
})

userSchema.pre('save', async function (next){
  if (!this.isModified('password')) return next();
  //async await method
  try {
    const salt = await bcrypt.genSalt(SALT_WORK_FACTOR);
    this.password = await bcrypt.hash(this.password, salt);
    return next();
  } catch (err) {
    next({
      log: 'error in userSchema.pre' + err,
      status: 400,
      message: 'try again'
    });
  }
});

userSchema.methods.validatePassword = async function(pass) {
  try {
    return await bcrypt.compare(pass, this.password);
  } catch (err) {
    return err;
  }
};

module.exports = mongoose.model('User', userSchema);