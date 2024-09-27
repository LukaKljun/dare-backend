const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors()); // Enable CORS to allow requests from your app

// Sample list of dares
const dares = [
  "Take a picture with your favorite book!",
  "Show off your best dance move!",
  "Take a photo with something that makes you laugh!",
  "Pretend you're a famous athlete and snap a picture while 'winning'!",
  // Add more dares as needed
];

// Endpoint to get a random dare
app.get('/daily-dare', (req, res) => {
  const randomDare = dares[Math.floor(Math.random() * dares.length)];
  res.json({ dare: randomDare });
});

// Export the app as a serverless function
module.exports = app;
