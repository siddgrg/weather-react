import React, { useState } from 'react';
import CardTop from './CardTop';
import Tab from './Tab';

const TabbedCards = ({ weatherData }) => {

    const [activeTab, setActiveTab] = useState('Current');
    const tabs = ['Current', '5 Days'];

    return (
        <>
            <div class="tabbedCardsTop">
                <CardTop show={activeTab} weatherData={weatherData} />
            </div>
            <div class="d-flex justify-content-center">
                {tabs.map((t) => <Tab key={t} active={activeTab === t ? true : false} title={t} setActiveTab={setActiveTab} />)}
            </div>
        </>
    )
}

export default TabbedCards;