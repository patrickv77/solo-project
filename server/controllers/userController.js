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
    res.locals.newUser = newUser;
    return next();
  }
}




module.exports = userController;