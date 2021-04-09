import React from 'react';
import WeatherDetailsToday from '../WeatherDetailsToday/WeatherDetailsToday'
import WeatherDetailsSmall from '../WeatherDetailsSmall/WeatherDetailsSmall'

const CardTop = ({ show }) => {
    if (show === "today") {
        return (
            <WeatherDetailsToday />
        )
    } else if (show === "fiveDays") {
        return (
            <WeatherDetailsSmall />
        )
    }

    return <p>Error</p>
}

export default CardTop;