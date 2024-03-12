const axios = require('axios');

const getWeather=async(req,res)=>{
    console.log(req.body);
    const { latitude, longitude } = req.body;
    try {
        const apiKey = process.env.OPEN_WEATHER_API_KEY; 
        const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
        console.log(apiUrl);
        const response = await axios.get(apiUrl);
        console.log(response);
        res.json({ weatherData: response.data });
    } catch (error) {
        console.log(error.message);
        res.status(500).json(error.message)
    }
}

module.exports = { getWeather}