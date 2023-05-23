const User = require('../models/userModel');

const userController = {};
/*
  create a user based on user input, will have a signup page in order to handle this in the front end
 */
userController.createUser = async (req, res, next) => {
  const { username, password, firstName, lastName } = req.body;

  if(!username || !password || !firstName || !lastName){
    //if any required input is missing, return error
    next({
      log: 'invalid req.body input at userController.createUser',
      status: 400,
      message: 'missing required input'
    })
  }

  //mongo should handle unique username
  const checkUser = await User.findOne({username});
  if(checkUser) {
    //if db finds user, return error
    next({
      log: 'username exists, will not invoke create at userController.createUser',
      status: 400,
      message: 'username already exists'
    })
  } else {
    //otherwise create a new user and pass it along
    const newUser = await User.create({username, password, firstName, lastName, techStack: []});
    res.locals.user = newUser;
    return next();
  }
}

//login handler
userController.verifyUser = async (req, res, next) => {
  const { username, password } = req.body;

  const userObj = await User.findOne({username});
  if(!userObj || !password) res.redirect('/signup');

  const valid = await userObj.validatePassword(password);
  if(valid === false) {
    res.redirect('/login');
  } else {
    res.locals.user = userObj;
    return next();
  }
}

//delete users.. for testing etc
userController.deleteUser = async (req, res, next) => {
  const { username } = req.body;

    try {
      //query database for student
      const deletedUser = await User.findOneAndDelete({ username });

      //handle case where no such student exists
      if (!deletedUser) {
        return next({
          log: 'no student data to delete with input name in userController.deleteUser',
          status: 400,
          message: `No username: ${username} in database`,
        });
      }

      //send deleted data back on res locals
      res.locals.deletedUser = deletedUser;
      return next();
    } catch (err) {
      return next({
        //if our async function (findOneAndDelete) errors out return this error
        log: 'error invoking findOneAndDelete on database at userController.deleteUser',
        status: 400,
        message: 'server error, try again!',
      });
    }
}




module.exports = userController;