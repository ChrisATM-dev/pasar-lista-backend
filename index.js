import express from "express";
import cors from "cors";

import holaMundoRouter from "./routes/holaMundo.js";

const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// Routes
app.get('/', (req, res) => {
  res.send('Hola Mundo');
});


app.use('/get-users', holaMundoRouter);

app.listen(5000, () => {
  console.log('Server is running on port 5000');
});