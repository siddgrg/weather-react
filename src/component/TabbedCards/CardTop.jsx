import React from 'react';
import WeatherDetailsCurrent from '../WeatherDetailsCurrent/WeatherDetailsCurrent'
import WeatherDetailsFive from '../WeatherDetailsFive/WeatherDetailsFive'

const CardTop = ({ show, weatherData }) => {
    
    if (show === "Current") {
        return (
            <WeatherDetailsCurrent weatherData={weatherData} />
        )
    } else if (show === "5 Days") {
        return (
            <WeatherDetailsFive weatherData={weatherData} />
        )
    }

    return <p>Error</p>
}

export default CardTop;