const { getWeather } = require('../Controller/WeatherController')

const router = require('express').Router()

// fetch weather
router.get('/fetchweather',getWeather)

module.exports = router
