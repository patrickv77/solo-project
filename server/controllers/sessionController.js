const { trusted } = require('mongoose');
const Session = require('../models/sessionModel');

const sessionController = {};

//runs when everything loads, if session exists, go straight to tech stack page
sessionController.isLoggedIn = async (req, res, next) => {
  try {
    const currentSession = await Session.find({ cookieId: req.cookies.ssid });
    if (currentSession === [] || currentSession) {
      res.locals.loggedIn = false;
      next();
    } else {
      res.locals.loggedIn = true;
      next();
    }
  } catch (err) {
    next({
      log: 'error with Session.findOne at sessionController.isLoggedIn',
      status: 400,
      message: 'could not find session',
    });
  }
};

//start or restart a session
sessionController.startSession = async (_req, res, next) => {
  //should only have one session at a time
  try {
    const sesh = await Session.find({});
    if (sesh) {
      await Session.deleteMany({});
    }
    const newSesh = await Session.create({
      cookieId: res.locals.user.id,
    });
    return next();
  } catch (err) {
    next({
      log: 'sessionController.startSession error ' + err,
      status: 400,
      message: 'error! try again.',
    });
  }
};

//logout functionality
sessionController.stopSession = async (_req, res, next) => {
  //delete session, go next
  try {
    await Session.deleteMany({});
    res.clearCookie('ssid');
    res.redirect('/login');
  } catch (err) {
    next({
      log: 'sessionController.stopSession error ' + err,
      status: 400,
      message: 'error! try again.',
    });
  }
};

module.exports = sessionController;
