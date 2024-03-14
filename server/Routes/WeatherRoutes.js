const { getWeather, getForecast, getSearchWeather } = require('../Controller/WeatherController')

const router = require('express').Router()

// fetch weather
router.post('/fetchweather',getWeather)
// fetch forecast
router.post('/forecast',getForecast)
// fetch search weather
router.post('/searchweather',getSearchWeather)

module.exports = router
