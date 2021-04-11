import React from 'react';
import TodayDate from './Date';
import IconDesc from './IconDesc';

const WeatherDetailsToday = ({weatherData}) => {

    const { weather, temp, humidity, feels_like, wind_speed } = weatherData.current;

    return (
        <>
            <TodayDate />
            <div class="weatherDetailsToday row">
                <div class="col-8">
                    <h3 class="temp">{Math.round(temp)}&deg;C</h3>
                    <p>Feels like {feels_like}&deg;C</p>
                    <p>Wind: {wind_speed} mph</p>
                    <p>Humidity: {humidity}%</p>
                </div>
                <div class="col-4 d-flex flex-column justify-content-center">
                    <IconDesc data={weather} />
                </div>
            </div>
        </>
    )
}

export default WeatherDetailsToday;