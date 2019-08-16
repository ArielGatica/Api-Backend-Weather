const express = require('express');
const ApiRoutes = express.Router();
const Weather = require('../controllers/weather');

ApiRoutes.route('/weather').post(Weather.getWeather);

module.exports = ApiRoutes;