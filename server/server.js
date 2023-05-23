const path = require('path');
const express = require('express');
const app = express();

const PORT = 3000;


app.use(express.json());
app.use(express.urlencoded());

//root, serve index html
app.get('/', (req, res) =>{
  res.sendFile(path.resolve(__dirname, '../client/index.html'));
})



//catch all for non existant routes
app.use((req, res) => res.status(404).send('This is not the page you\'re looking for...'));

//default error handler
app.use((err, req, res, next) => {
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