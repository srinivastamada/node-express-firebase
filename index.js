const functions = require('firebase-functions');
const express = require('express');
const PORT = process.env.PORT || 3000;
const app = express();

app.get('/hello', (req, res, next) => {
  res.send('Hello');
});

app.listen(PORT, () => {
console.log('Server is running on PORT:', PORT);
});

exports.app = functions.https.onRequest(app);