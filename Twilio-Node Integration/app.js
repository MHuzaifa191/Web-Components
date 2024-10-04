// app.js

const express = require('express');
const app = express();
require('dotenv').config();

const twilioRoutes = require('./routes/twilioRoutes'); // Path to the routes file

app.use(express.json());

// Use the Twilio routes directly
app.use('/', twilioRoutes); 

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
