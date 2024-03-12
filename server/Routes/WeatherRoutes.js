const { getWeather } = require('../Controller/WeatherController')

const router = require('express').Router()

// fetch weather
router.post('/fetchweather',getWeather)

module.exports = router
