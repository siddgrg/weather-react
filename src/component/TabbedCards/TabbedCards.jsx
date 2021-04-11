import React, { useState } from 'react';
import CardTop from './CardTop';
import Tab from './Tab';

const TabbedCards = ({ weatherData }) => {

    const [activeTab, setActiveTab] = useState('fiveDays')

    return (
        <>
            <div class="tabbedCardsTop">
                <CardTop show={activeTab} weatherData={weatherData} />
            </div>
            <div class="d-flex justify-content-center">
                <Tab active={activeTab === 'today' ? true : false } title="Today" />
                <Tab active={activeTab === 'fiveDays' ? true : false } title="5 Days" />
            </div>
        </>
    )
}

export default TabbedCards;