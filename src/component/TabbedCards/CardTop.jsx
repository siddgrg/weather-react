import React from 'react';
import WeatherDetailsCurrent from '../WeatherDetailsCurrent/WeatherDetailsCurrent'
import WeatherDetailsFive from '../WeatherDetailsFive/WeatherDetailsFive'

const CardTop = ({ show, weatherData, dateTime }) => {
    
    if (show === "Current") {
        return (
            <WeatherDetailsCurrent weatherData={weatherData} dateTime={dateTime} />
        )
    } else if (show === "5 Days") {
        return (
            <WeatherDetailsFive weatherData={weatherData} dateTime={dateTime} />
        )
    }

    return <p>Error</p>
}

export default CardTop;