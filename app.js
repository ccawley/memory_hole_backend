const express = require('express');
const cors = require('cors');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 8000;
require('dotenv').config()

app.use(cors());
app.disable('x-powered-by');
app.use(morgan('dev'));
app.use(bodyParser.json());

const { UsersRouter, Routine } = require('./routes')
app.use('/user', UsersRouter)
app.use('/routine', Routine)

const axios = require('axios')
app.get('/quote', (req, res, next) => {
  axios.get('http://api.forismatic.com/api/1.0/?method=getQuote&key=457653&format=json&lang=en')
  .then((result) => {
    console.log(result.data);
    res.json(result.data);
  })
})

app.use((err, req, res, next) => {
  const status = err.status || 500;
  res.status(status).json({ error: err });
});

app.use((req, res, next) => {
  res.status(404).json({ error: { message: 'Not found' } });
});

app.listen(PORT, () => console.log(`Listening on port: ${PORT}`));

module.exports = app;
