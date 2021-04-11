import React from 'react';
import WeatherDetailsSmall from './WeatherDetailsSmall';

const WeatherDetailsFive = ({ weatherData }) => {

    let weatherDetailsSmallArray = [];

    for (let i = 0; i !== 5; i++) {
        const w = weatherData.daily[i];
        weatherDetailsSmallArray
            .push(<WeatherDetailsSmall
                    key={i} 
                    index={i}
                    weather={w.weather[0]} 
                    temp={w.temp}
                    windSpeed={w.wind_speed}
                />)
    }

    return (
        <div class="weatherDetailsFive">
            {weatherDetailsSmallArray}
        </div>
    )
}

export default WeatherDetailsFive;