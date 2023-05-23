const express = require('express');
const userController = require('../controllers/userController');

const router = express.Router();

router.post('/',
  userController.createUser,
  (_req, res) => res.status(200).json(res.locals.newUser)
)

module.exports = router;