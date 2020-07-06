const express = require('express');
const dotenv = require('dotenv');
const colors = require('colors');
const morgan = require('morgan');
const connectDB = require('./config/db');

// Initialization
dotenv.config({ path: './config/config.env' });
connectDB();
const transactions = require('./routes/transactions');
const app = express();

// Middleware
app.use(express.json());

// Routing
app.use('/api/v1/transactions', transactions);

// Port handling
const PORT = process.env.PORT || 5000;
app.listen(
  PORT,
  console.log(
    `Server running in ${process.env.NODE_ENV} mode on port ${PORT}.`.yellow
      .bold
  )
);
