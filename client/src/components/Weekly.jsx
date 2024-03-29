import React from 'react'

const Weekly = ({day}) => {
    return (
        <div className="row" >
            <span>{new Date(day.dt * 1000).toLocaleDateString()}</span>
            <span className='rfid'>
                <img src={`https://openweathermap.org/img/wn/${day.weather[0].icon}@4x.png`} alt="Weather Icon" />
                {day.weather[0].main}
            </span>
        </div>)
}

export default Weekly