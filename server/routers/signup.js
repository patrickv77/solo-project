const express = require('express');
const userController = require('../controllers/userController');

const router = express.Router();

router.post('/',
  userController.createUser,
  (_req, res) => res.status(200).json(res.locals.newUser)
)

//delete.. no admin privs.. stretch goal.. dont delete my users T_T
router.delete('/admin',
  userController.deleteUser,
  (_req, res) => res.status(200).json(res.locals.deletedUser)
)

module.exports = router;