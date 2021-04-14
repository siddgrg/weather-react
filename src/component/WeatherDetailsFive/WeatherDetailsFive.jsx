import React from 'react';
import WeatherDetailsSmall from './WeatherDetailsSmall';

const WeatherDetailsFive = ({ weatherData }) => {

    let weatherDetailsSmallArray = [];
    const { timezone_offset } = weatherData;
    const { dt } = weatherData.current;

    console.log(weatherData);

    for (let i = 0; i !== 5; i++) {
        const w = weatherData.daily[i];
        weatherDetailsSmallArray
            .push(<WeatherDetailsSmall
                    key={i} 
                    index={i}
                    weather={w.weather[0]}
                    temp={w.temp}
                    dateTime={dt}
                    timezoneOffset={timezone_offset}
                />)
    }

    return (
        <div class="weatherDetailsFive">
            {weatherDetailsSmallArray}
        </div>
    )
}

export default WeatherDetailsFive;