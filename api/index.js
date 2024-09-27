const express = require('express');
const cors = require('cors');
const app = express();

// Enable CORS
app.use(cors());
app.use(express.json());

const dares = [
    "Take a picture with your favorite book!",
    "Show off your best dance move!",
    "Take a picture while doing a handstand (or trying to)!",
];
  

// Route to get the daily dare
app.get('/daily-dare', (req, res) => {
    const startOfYear = new Date(new Date().getFullYear(), 0, 1);
    const dayOfYear = Math.floor((new Date() - startOfYear) / (1000 * 60 * 60 * 24));
    const dare = dares[dayOfYear % dares.length]; // Rotate dares
    res.json({ dare });
});

// Start the server
const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
