import React, { useState } from 'react';
import CardTop from './CardTop';
import Tab from './Tab';

const TabbedCards = ({ weatherData }) => {

    const [activeTab, setActiveTab] = useState('today');

    return (
        <>
            <div class="tabbedCardsTop">
                <CardTop show={activeTab} weatherData={weatherData} />
            </div>
            <div class="d-flex justify-content-center">
                <Tab 
                    active={activeTab === 'today' ? true : false}
                    title="Today"
                    setActiveTab={setActiveTab}
                />
                <Tab 
                    active={activeTab === 'fiveDays' ? true : false}
                    title="5 Days"
                    setActiveTab={setActiveTab}
                />
            </div>
        </>
    )
}

export default TabbedCards;