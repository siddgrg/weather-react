import React from 'react';

const CurrentDate = ({ dateTime }) => {

    const getCurrentDate = () => {
        return `${dateTime.toLocaleTimeString([], { hour: `2-digit`, minute: `2-digit` })} - ` +
            `${dateTime.toLocaleDateString(`en-GB`, { weekday: `long`, year: `numeric`, month: `long`, day: `numeric` })}`
    }

    return <p class="currentDate">{getCurrentDate()}</p>
}

export default CurrentDate;