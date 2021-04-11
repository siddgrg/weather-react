import React from 'react';
import WeatherDetailsToday from '../WeatherDetailsToday/WeatherDetailsToday'
import WeatherDetailsFive from '../WeatherDetailsFive/WeatherDetailsFive'

const CardTop = ({ show, weatherData }) => {
    if (show === "today") {
        return (
            <WeatherDetailsToday weatherData={weatherData} />
        )
    } else if (show === "fiveDays") {
        return (
            <WeatherDetailsFive weatherData={weatherData} />
        )
    }

    return <p>Error</p>
}

export default CardTop;