const mongoose = require('mongoose');

//sessions expire in 1 hour, for initial testing will set to 30 seconds
const sessionSchema = new mongoose.Schema({
  cookieId: { type: String, required: true, unique: true },
  createdAt: { type: Date, expires: 30, default: Date.now }
});

module.exports = mongoose.model('Session', sessionSchema);