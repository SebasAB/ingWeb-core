import express from "express";
import cors from "cors";
import mongoose from "mongoose";

import bookRoutes from './routes/books.js'

const app = express();


app.use(express.json({ limit: "30mb", extended: true }));
app.use(express.urlencoded({ limit: "30mb", extended: true }));

app.use(cors());
app.use('/books', bookRoutes)

const CONNECTION_URL =
  "mongodb+srv://SebasAB:sebas123@cluster0.xu7tj.mongodb.net/ingWebCore?retryWrites=true&w=majority";

const PORT = process.env.PORT || 5000;

mongoose
  .connect(CONNECTION_URL)
  .then(() =>
    app.listen(PORT, () => console.log(`Server running on port: ${PORT}`))
  )
  .catch((error) => console.log(error));

