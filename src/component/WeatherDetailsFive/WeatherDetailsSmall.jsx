import React from 'react';
import IconDesc from '../WeatherDetailsToday/IconDesc';
import FiveDaysDate from './FiveDaysDate';
import FiveDaysTemp from './FiveDaysTemp';

const WeatherDetailsSmall = ({ index, weather, temp }) => {

    const date = new Date();
    date.setDate(date.getDate() + index);

    return (
        <div class={index % 2 !== 0 ? "weatherDetailsSmall" : "weatherDetailsSmall active"}>
            {index === 0 && <p class="mt-4 mb-0">Today</p>}
            {index !== 0 && <FiveDaysDate date={date} />}
            <IconDesc data={[weather]} />
            <FiveDaysTemp temp={temp} />
        </div>
    )
}

export default WeatherDetailsSmall;