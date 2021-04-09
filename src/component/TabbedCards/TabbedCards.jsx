import React from 'react';
import CardTop from './CardTop';
import Tab from './Tab';

const TabbedCards = () => {
    return (
        <>
            <div class="tabbedCardsTop p-2">
                <CardTop show="today" />
            </div>
            <div class="d-flex justify-content-center">
                <Tab active="true" title="Today" />
                <Tab active="false" title="5 Days" />
            </div>
        </>
    )
}

export default TabbedCards;