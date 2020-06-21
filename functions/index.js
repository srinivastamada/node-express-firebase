const functions = require('firebase-functions');
const express = require('express');
const validator = require("email-validator");
const PORT = 3000;
const app = express();

/* JSON body parse*/
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/hello', (req, res, next) => {
  console.info('/hello call success ');
  res.send('Welcome to Firebase Cloud Functions');
});

app.post('/emailValidate', async (req, res, next) => {
  const postData = req.body;
  if(postData.email){
    console.info('/emailValidate call success ');
    res.json({'status': validator.validate(postData.email) });
  } else {
    console.warn('/emailValidate wrong input ');
    res.status(500).json({'status': 'wrong input'});
  }

});

app.listen(PORT, () => {
  console.info('Server is running on PORT:', PORT);
});

exports.app = functions.https.onRequest(app);
