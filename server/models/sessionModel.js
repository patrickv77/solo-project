const mongoose = require('mongoose');

//sessions expire in 1 hour
const sessionSchema = new mongoose.Schema({
  cookieId: { type: String, required: true, unique: true },
  createdAt: { type: Date, expireAfterSeconds: 3600, default: Date.now }
});

module.exports = mongoose.model('Session', sessionSchema);