import React, { useState } from 'react';
import CardTop from './CardTop';
import Tab from './Tab';

const TabbedCards = ({ weatherData, dateTime }) => {

    const [activeTab, setActiveTab] = useState(0);
    const tabs = ['Current', '5 Days'];

    return (
        <>
            <div class="tabbedCardsTop">
                <CardTop show={activeTab} weatherData={weatherData} dateTime={dateTime} />
            </div>
            <div class="d-flex justify-content-center">
                {tabs.map((t, i) => <Tab key={t} active={activeTab === i ? true : false} index={i} title={t} setActiveTab={setActiveTab} />)}
            </div>
        </>
    )
}

export default TabbedCards;