const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();

require('dotenv').config();
require('./models');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log(`Connected to MongoDB at ${process.env.MONGO_URL}`);
  });

const server = app.listen(process.env.PORT, () => {
  console.log(`Server running on port ${process.env.PORT}`);
});
