import React from 'react';
import TodayCard from './TodayCard';
import FiveDaysCard from './FiveDaysCard';
import Tab from './Tab';

const TabbedCards = () => {
    return (
        <>
            <TodayCard />
            <FiveDaysCard />
            <Tab />
            <Tab />
        </>
    )
}

export default TabbedCards;