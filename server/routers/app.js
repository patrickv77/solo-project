const express = require('express');
const userController = require('../controllers/userController');
const cookieController = require('../controllers/cookieController')
const sessionController = require('../controllers/sessionController');

const router = express.Router();


router.post('/',
  (_req, res) => res.status(200).json({})
)

module.exports = router;