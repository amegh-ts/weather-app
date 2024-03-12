import React from 'react'
import './Hero.scss'
import { feelsLike, temperature, weatherIcon } from '../data/WeatherUtils';

const Hero = ({ weather, forecast }) => {
  const icon = weatherIcon(weather);
  const temp = temperature(weather);
  const feels = feelsLike(weather);


  const list = forecast?.weatherData?.list;

  console.log('list', list);

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

  // Output the result
  console.log(firstWeatherReadings);

  return (
    <div className='Hero'>
      <div className="left">
        <div className="top">
          <div className="current-wether">
            <h2>My Location</h2>
            <span>
              <h1>{temp}°</h1>
              <h3>Feels like {feels}°</h3>
            </span>
          </div>
          <div className="wether-icon">
            <img src={`https://openweathermap.org/img/wn/${icon}@4x.png`} alt="Weather Icon" />
          </div>
        </div>
      </div>

      <div className="right">
        <h3>7 day forecast</h3>
        <div className="container">
          {firstWeatherReadings?.map((day, index) => (
            <div className="row" key={index}>
              <span>{new Date(day.dt * 1000).toLocaleDateString()}</span>
              <span>
                <img src={`https://openweathermap.org/img/wn/${day.weather[0].icon}.png`} alt="Weather Icon" />
                {day.weather[0].description}
              </span>
            </div>
          ))}

        </div>
      </div>
    </div>
  )
}

export default Hero