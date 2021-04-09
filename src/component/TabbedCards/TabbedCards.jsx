import React from 'react';
import Tab from './Tab';
import WeatherDetailsToday from '../WeatherDetailsToday/WeatherDetailsToday';

const TabbedCards = () => {
    return (
        <>
            <div class="tabbedCardsTop">
                <WeatherDetailsToday />
            </div>
            <div class="d-flex justify-content-center">
                <Tab active="true" title="Today" />
                <Tab active="false" title="5 Days" />
            </div>
        </>
    )
}

export default TabbedCards;