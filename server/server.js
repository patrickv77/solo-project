const path = require('path');
const express = require('express');
const app = express();
const cookieParser = require('cookie-parser');

const PORT = 3000;

//routers
const signupRouter = require('./routers/signup');
const loginRouter = require('./routers/login');
const appRouter = require('./routers/app');

//controllers
const sessionController = require('./controllers/sessionController');

app.use(express.json());
app.use(express.urlencoded());
app.use(cookieParser());

//root, serve index html
app.get('/',
  sessionController.isLoggedIn,
  (_req, res) => {
  if(res.locals.isLoggedIn){
    //redirect to main page, 
    res.sendStatus(200);
  }else{
    //login page
    res.sendFile(path.resolve(__dirname, '../client/index.html'));
  }
});

//signup router
app.use('/signup', signupRouter);

//login router
app.use('/login', loginRouter);

//main page
app.use('/app', appRouter);

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
