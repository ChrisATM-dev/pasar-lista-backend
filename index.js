import express from "express";
import cors from "cors";

import asistente from "./routes/asistente.js";

const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// Routes
app.get('/', (req, res) => {
  res.send('Hola Mundo');
});


app.use('/asistente', asistente);

app.listen(5000, () => {
  console.log('Server is running on port 5000');
});