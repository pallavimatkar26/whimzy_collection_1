// import express from 'express';
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
// import mongoose from 'mongoose';
// import data from './data';
// import userRouter from './routers/userRouter';

// const data = require('./data');
const userRouter = require('./routers/userRouter');
const productRouter = require('./routers/productRouter');

dotenv.config();
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }))

mongoose.connect('mongodb://localhost/product_collections', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});

// app.get('/api/products/:id', (req, res) => {
//   const product = data.products.find((x) => x._id === req.params.id);
//   if (product) {
//     res.send(product);
//   } else {
//     res.status(404).send({ message: 'Product Not Found' });
//   }
// });

// app.get('/api/products', (req, res) => {
//   res.send(data.products);
// });

 app.use('/api/users', userRouter);
 app.use('/api/products', productRouter);
 app.get('/', (req, res) => {
  res.send('Server is ready');
});

app.use((err, req, res, next) => {
  res.status(500).send({ message: err.message });
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Serve at http://localhost:${port}`);
});
