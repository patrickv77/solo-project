const path = require('path');
const express = require('express');
const userController = require('../controllers/userController');
const cookieController = require('../controllers/cookieController');
const sessionController = require('../controllers/sessionController');

const router = express.Router();

router.get('/', sessionController.isLoggedIn, (_req, res) => {
  if (res.locals.loggedIn) {
    //redirect to main page,
    res.sendStatus(200);
  } else {
    //login page
    res.sendFile(path.resolve(__dirname, '../../client/login.html'));
  }
});

router.post(
  '/',
  userController.verifyUser,
  cookieController.setSSIDCookie,
  sessionController.startSession,
  (_req, res) => res.status(200).json(res.locals.user)
);

module.exports = router;
