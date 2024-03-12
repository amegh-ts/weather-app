import React from 'react'
import './Hero.scss'

const Hero = ({ weather }) => {
  const icon = weather?.weatherData?.weather[0]?.icon;
  const temp = Math.floor(weather?.weatherData?.main?.temp);
  const feels = Math.floor(weather?.weatherData?.main?.feels_like);
  console.log(weather);
  


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
          <div className="row">h</div>
          <div className="row">g</div>
          <div className="row"></div>
          <div className="row"></div>
          <div className="row"></div>
          <div className="row"></div>
          <div className="row"></div>
        </div>
      </div>
    </div>
  )
}

export default Hero