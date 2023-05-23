const Session = require('../models/sessionModel');

const sessionController = {};

//runs when everything loads, if session exists, go straight to tech stack page
sessionController.isLoggedIn = async (req, res, next) => {
  try{
    const currentSession = await Session.findOne({
      cookieId: req.cookies.ssid,
    });
  
    if(currentSession){
      res.locals.loggedIn = true;
      next();
    } else {
      res.redirect('/login');
    }
  } catch(err) {
    next({
      log: 'error with Session.findOne at sessionController.isLoggedIn',
      status: 400,
      message: 'could not find session'
    })
  }
} 

//start or restart a session
sessionController.startSession = async (_req, res, next) => {
  //should only have one session at a time
  try {
    await Session.delete({});
    await Session.create({
      cookieId: res.locals.user.id,
    });
    return next();
  } catch (err) {
    next({
      log: 'sessionController.startSession error ' + err,
      status: 400,
      message: 'error! try again.'
    });
  }
};

module.exports = sessionController;
