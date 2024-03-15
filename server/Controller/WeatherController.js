const axios = require('axios');

const getWeather = async (req, res) => {
    // console.log(req.body);
    const { latitude, longitude } = req.body;
    try {
        const apiKey = process.env.OPEN_WEATHER_API_KEY;
        const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
        // console.log(apiUrl);
        const response = await axios.get(apiUrl);
        // console.log(response.data);
        res.json({ weatherData: response.data });
    } catch (error) {
        console.log(error.message);
        res.status(500).json(error.message)
    }
}

const getForecast = async (req, res) => {
    // console.log(req.body);
    const { latitude, longitude } = req.body;
    try {
        const apiKey = process.env.OPEN_WEATHER_API_KEY;
        const apiUrl = `http://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
        const response = await axios.get(apiUrl);
        res.json({ weatherData: response.data });
    } catch (error) {
        console.log(error.message);
        res.status(500).json(error.message)
    }
}


const getSearchWeather = async (req, res) => {
    // console.log(req.body);
    const {lowerCaseQuery} = req.body;
    // console.log(lowerCaseQuery);
    try {
        const apiKey = process.env.OPEN_WEATHER_API_KEY;
        const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${lowerCaseQuery}&appid=${apiKey}&units=metric`;
        // console.log(apiUrl);
        const response = await axios.get(apiUrl);
        // console.log(response.data);
        res.json({ weatherData: response.data });
    } catch (error) {
        console.log(error.message);
        res.status(500).json(error.message)
    }
}

module.exports = { getWeather,getForecast,getSearchWeather }