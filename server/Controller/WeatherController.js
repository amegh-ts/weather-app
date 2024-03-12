const axios = require('axios');

const getWeather=async(req,res)=>{
    const { latitude, longitude } = req.body;
    try {
        const apiKey = process.env.OPEN_WEATHER_API_KEY; 
        const apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
        const response = await axios.get(apiUrl);
        res.json({ weatherData: response.data });
    } catch (error) {
        res.status(500).json(error)
    }
}

module.exports = { getWeather}