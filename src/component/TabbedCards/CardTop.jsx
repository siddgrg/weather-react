import React from 'react';
import WeatherDetailsToday from '../WeatherDetailsToday/WeatherDetailsToday'
import WeatherDetailsSmall from '../WeatherDetailsSmall/WeatherDetailsSmall'

const CardTop = ({ show, weatherData }) => {
    if (show === "today") {
        return (
            <WeatherDetailsToday weatherData={weatherData} />
        )
    } else if (show === "fiveDays") {
        return (
            <WeatherDetailsSmall />
        )
    }

    return <p>Error</p>
}

export default CardTop;