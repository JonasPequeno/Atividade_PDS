const express = require('express');
const consign = require('consign');

const app = express();

consign()
  .include('libs/middlewares.js')
  .then('libs/connFactory.js')
  .then('models')
  .then('controllers')
  .then('routes')
  .then('libs/boot.js')
  .into(app);
