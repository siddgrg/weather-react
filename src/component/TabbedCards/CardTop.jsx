import React from 'react';
import WeatherDetailsCurrent from '../WeatherDetailsCurrent/WeatherDetailsCurrent'
import WeatherDetailsFive from '../WeatherDetailsFive/WeatherDetailsFive'

const CardTop = ({ show, weatherData }) => {
    if (show === "current") {
        return (
            <WeatherDetailsCurrent weatherData={weatherData} />
        )
    } else if (show === "fiveDays") {
        return (
            <WeatherDetailsFive weatherData={weatherData} />
        )
    }

    return <p>Error</p>
}

export default CardTop;