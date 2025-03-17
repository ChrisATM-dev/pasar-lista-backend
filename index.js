const express = require('express');
const cors = require('cors');

const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// Routes
app.use('/Hola-mundo', require('./routes/holaMundo'));

app.listen(5000, () => {
  console.log('Server is running on port 5000');
})