const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();

// Express Setup

const app = express();
app.use(cors());
app.use(express.json());

// Start server

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port: ${PORT}`));

// Set up routes

app.use("/posts", require("./routes/postRoutes"));

// Connect to DB

console.log("Connecting to MongoDB");
mongoose.connect(
  process.env.MONGODB_URI,
  { useNewUrlParser: true, useUnifiedTopology: true },
  (err) => {
    if (err) return console.error(err);
    console.log("MongoDB connection established");
  }
);
