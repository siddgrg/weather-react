import React from 'react';
import WeatherDetailsCurrent from '../WeatherDetailsCurrent/WeatherDetailsCurrent'
import WeatherDetailsFive from '../WeatherDetailsFive/WeatherDetailsFive'

const CardTop = ({ show, weatherData, dateTime }) => {

    switch (show) {
        case 0:
            return <WeatherDetailsCurrent weatherData={weatherData} dateTime={dateTime} />;
        case 1:
            return <WeatherDetailsFive weatherData={weatherData} dateTime={dateTime} />
        default:
            return <p>Error</p>
    }
}

export default CardTop;