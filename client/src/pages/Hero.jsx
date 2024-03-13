import React from 'react'
import './Hero.scss'
import { airHumidity, airPressure, cityName, feelsLike, maxTemp, maxVisibility, minTemp, temperature, weatherDesc, weatherIcon, windSpeed } from '../data/WeatherUtils';
import { FaDroplet, FaGauge, FaWind, FaTemperatureArrowUp, FaTemperatureArrowDown } from "react-icons/fa6";
import Today from '../components/Today';
import Weekly from '../components/Weekly';

const Hero = ({ weather, forecast }) => {
  const icon = weatherIcon(weather);
  const temp = temperature(weather);
  const feels = feelsLike(weather);
  const city = cityName(forecast)
  const humidity = airHumidity(weather)
  const pressure = airPressure(weather)
  const wind = windSpeed(weather)
  const max = maxTemp(weather)
  const min = minTemp(weather)
  const visibility = maxVisibility(weather)
  const description=weatherDesc(weather)

  const list = forecast?.weatherData?.list;
  const firstSix = list?.slice(0, 6);

  // Function to extract the first reading of weather from each day
  function getFirstWeatherReadingPerDay(list) {
    const weatherByDay = {};

    // Group weather data by day
    list?.forEach(data => {
      // Convert Unix timestamp to day
      const date = new Date(data.dt * 1000);
      const day = date.toDateString();
      // If day not in weatherByDay, add it with the weather reading
      if (!weatherByDay[day]) {
        weatherByDay[day] = data;
      }
    });
    // Convert weatherByDay object to array
    const firstWeatherReadings = Object.values(weatherByDay);
    return firstWeatherReadings;
  }
  // Get first weather reading from each day
  const firstWeatherReadings = getFirstWeatherReadingPerDay(list);

  return (
    <div className='Hero'>
      <div className="left">
        <div className="top">
          <div className="current-wether">
            <h2>My Location</h2>
            <span>
              <h1>{temp}°</h1>
              <h3>Feels like {feels}°</h3>
              <h5>{description}</h5>
            </span>
          </div>
          <div className="wether-icon">
            <img src={`https://openweathermap.org/img/wn/${icon}@4x.png`} alt="Weather Icon" />
          </div>
        </div>

        <div className="middle">
          <h4>TODAY'S FORECAST</h4>
          <div className="container">
            {firstSix?.map((day, index) => (
              <Today key={index} day={day}/>
            ))}
          </div>
        </div>

        <div className="bottom">
          <h4>AIR CONDITION</h4>
          <div className="container">
            <div className="row">
              <div className="column">
                <div className='card'>
                  <span>
                    <FaDroplet className='icon' />
                    <h3>Humidity</h3>
                  </span>
                  <h1>{humidity}%</h1>
                </div>
                <div className='card'>
                  <span>
                    <FaGauge className='icon' />
                    <h3>Pressure</h3>
                  </span>
                  <h1>{pressure} hPa</h1>
                </div>
              </div>

              <div className="column">
                <div className='card'>
                  <span>
                    <FaWind className='icon' />
                    <h3>Wind</h3>
                  </span>
                  <h1>{wind} m/s</h1>
                </div>
                <div className='card'>
                  <span>
                    <FaTemperatureArrowUp className='icon' />
                    <h3>Max.Temp</h3>
                  </span>
                  <h1>{max}°</h1>
                </div>
              </div>
                

              <div className="column">
                <div className='card'>
                  <span>
                    <FaTemperatureArrowDown className='icon' />
                    <h3>Visibility</h3>
                  </span>
                  <h1>{visibility} m</h1>
                </div>
                <div className='card'>
                  <span>
                    <FaTemperatureArrowDown className='icon' />
                    <h3>Min.Temp</h3>
                  </span>
                  <h1>{min}°</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="right">
        <h3>6 day forecast for {city}</h3>
        <div className="container">
          {firstWeatherReadings?.map((day, index) => (
            <Weekly key={index} day={day}/>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Hero