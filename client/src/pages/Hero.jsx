import React from 'react'
import './Hero.scss'

const Hero = ({ weather }) => {
  const icon = weather?.weatherData?.current?.weather[0]?.icon;
  const temp = Math.floor(weather?.weatherData?.current?.temp);


  return (
    <div className='Hero'>
      <div className="top">
        <div className="left">
          <h2>My Location</h2>
          <div className="temp">
            <img src={`https://openweathermap.org/img/wn/${icon}@4x.png`} alt="Weather Icon" />
            <h1>{temp}°</h1>
          </div>
          <h4>feels like</h4>
        </div>
        <div className="right"></div>
      </div>
    </div>
  )
}

export default Hero