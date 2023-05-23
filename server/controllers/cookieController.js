const cookieController = {};

// test cookies 
// cookieController.testCookie = (req, res, next) => {
//   res.cookie('test', 'i love will sentance');
//   return next();
// }

/** setSSIDCookie - store the user id in a cookie */
cookieController.setSSIDCookie = (_req, res, next) => {
  res.cookie('ssid', res.locals.user.id, { httpOnly: true });
  return next();
};

module.exports = cookieController;