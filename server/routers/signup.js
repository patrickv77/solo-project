const express = require('express');
const path = require('path');
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
    res.sendFile(path.resolve(__dirname, '../../client/signup.html'));
  }
});

router.post(
  '/',
  userController.createUser,
  cookieController.setSSIDCookie,
  sessionController.startSession,
  (_req, res) => res.status(200).json(res.locals.user)
);

//delete.. no admin privs.. stretch goal.. dont delete my users T_T
router.delete('/admin', userController.deleteUser, (_req, res) =>
  res.status(200).json(res.locals.deletedUser)
);

module.exports = router;
