import React from 'react';

const WeatherDetailsSmall = ({ index, weather, temp, windSpeed }) => {

    return (
        <div class={index % 2 !== 0 ? "weatherDetailsSmall" : "weatherDetailsSmall active"}>
            <p>w</p>
        </div>
    )
}

export default WeatherDetailsSmall;