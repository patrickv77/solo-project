const express = require('express');
const path = require('path');
const userController = require('../controllers/userController');
const cookieController = require('../controllers/cookieController');
const sessionController = require('../controllers/sessionController');

const router = express.Router();

router.get('/', sessionController.isLoggedIn, (_req, res) => {
  if (res.locals.loggedIn) {
    //redirect to main page,
    res.sendFile(path.resolve(__dirname, '../../client/index.html'));
  } else {
    //login page
    res.sendFile(path.resolve(__dirname, '../../client/signup.html'));
  }
});

router.get('/user',
  userController.getUser,
  (_req, res) => {
    res.status(200).json(res.locals.user);
  }
);

//handles adding techs to stack
router.patch('/',
  (_req, res) => res.status(200).json({})
)

module.exports = router;