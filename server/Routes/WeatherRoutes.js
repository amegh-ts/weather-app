const { getWeather, getForecast } = require('../Controller/WeatherController')

const router = require('express').Router()

// fetch weather
router.post('/fetchweather',getWeather)
router.post('/forecast',getForecast)



module.exports = router
