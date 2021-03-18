const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();

// Setting up application

const app = express();
app.use(cors);
app.use(express.json());

// Start server

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => console.log(`Server started on port: ${PORT}`));

// Connect to Database

console.log(`Connection to MongoDB...`);
mongoose.connect(
  process.env.MONGODB_URI,
  { useUnifiedTopology: true, useNewUrlParser: true },
  (err) => {
    if (err) {
      console.error(err);
    } else {
      console.log(`Connection to MongoDB established.`);
    }
  }
);
