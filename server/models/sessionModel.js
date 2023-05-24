const mongoose = require('mongoose');

//sessions expire in 1 hour, for initial testing will set to 8 hours
const sessionSchema = new mongoose.Schema({
  cookieId: { type: String, required: true, unique: true },
  createdAt: { type: Date, expires: 28800, default: Date.now }
});

module.exports = mongoose.model('Session', sessionSchema);