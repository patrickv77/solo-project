const path = require('path');
const express = require('express');
const app = express();
const cookieParser = require('cookie-parser');

const PORT = 3000;

//routers
const loginRouter = require('./routers/login');
const signupRouter = require('./routers/signup');
const appRouter = require('./routers/app');
const acornRouter = require('./routers/acorn');

//controllers
const cookieController = require('./controllers/cookieController');
const sessionController = require('./controllers/sessionController');
const userController = require('./controllers/userController');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.resolve(__dirname, '../client/public')));
app.use(express.static(path.resolve(__dirname, '../dist')));

//root, serve index html
app.get('/', sessionController.isLoggedIn, (_req, res) => {
  console.log(res.locals.loggedIn);
  if (res.locals.loggedIn) {
    //redirect to main page,
    res.sendFile(path.resolve(__dirname, '../dist/index.html'));
  } else {
    //login page
    res.sendFile(path.resolve(__dirname, '../client/login.html'));
  }
});

//signup router
app.use('/signup', signupRouter);

//login router
app.use('/login', loginRouter);

//main page
app.use('/app', appRouter);

app.use('/acorn', acornRouter);

//TEST ROUTES TO TEST MIDDLEWARE
// app.get('/test', userController.getUser, (req, res) => {
//   res.status(200).json(res.locals.user);
// });
// app.post('/test', userController.addToStack, (req, res) => {
//   res.sendStatus(200);
// });

// app.patch('/test', userController.learningHandler, (_req, res) => {
//   res.status(200).json(res.locals.learning);
// });

//catch all for non existant routes
app.use((_req, res) =>
  res.status(404).send("This is not the page you're looking for...")
);

//default error handler
app.use((err, _req, res, _next) => {
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 500,
    message: { err: 'An error occurred' },
  };
  const errorObj = Object.assign({}, defaultErr, err);
  console.log(errorObj.log);
  return res.status(errorObj.status).json(errorObj.message);
});

//starts server on PORT 3000
app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}...`);
});

module.exports = app;
