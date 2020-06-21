const functions = require('firebase-functions');
const express = require('express');

const PORT = 3000;
const app = express();

/* JSON body parse*/
const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())


app.get('/hello', (req, res, next) => {
  res.send('Welcome to Firebase Cloud Functions');
});

app.post('/validate', async (req, res, next) => {
  const postData = req.body;
  console.log(req.body)
   res.json(postData)
  });

app.listen(PORT, () => {
  console.log('Server is running on PORT:', PORT);
});

exports.app = functions.https.onRequest(app);
