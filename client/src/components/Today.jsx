import React from 'react'

const Today = ({day}) => {
    return (
        <div className="column" >
            <span>{new Date(day.dt * 1000).toLocaleTimeString([], { hour: 'numeric', minute: '2-digit', hour12: true })}</span>
            <span>
                <img src={`https://openweathermap.org/img/wn/${day.weather[0].icon}.png`} alt="Weather Icon" />
                {day.weather[0].description}
            </span>
        </div>
    )
}

export default Today