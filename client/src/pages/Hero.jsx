import React from 'react'
import './Hero.scss'

const Hero = ({ weather }) => {
  const icon = weather?.weatherData?.current?.weather[0]?.icon;
  const temp = Math.floor(weather?.weatherData?.current?.temp);


  return (
    <div className='Hero'>
      <div className="left">
        <div className="top">

          {/* <img src={`https://openweathermap.org/img/wn/${icon}@4x.png`} alt="Weather Icon" /> */}
          <div className="left">

            <h1>{temp}°</h1>
          </div>
          <div className="right"></div>
        </div>
      </div>

      <div className="right">
        <h1>7 day forecast</h1>
      </div>
    </div>
  )
}

export default Hero