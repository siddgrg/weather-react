import React from 'react';

const CurrentDate = ({ dateTime, timezoneOffset }) => {

    const getCurrentDate = () => {
        const currentDate = new Date((dateTime + timezoneOffset - 3600) * 1000);
        return `${currentDate.toLocaleTimeString([], { hour: `2-digit`, minute: `2-digit` })} - ` +
            `${currentDate.toLocaleDateString(`en-GB`, { weekday: `long`, year: `numeric`, month: `long`, day: `numeric` })}`
    }

    return <p class="currentDate">{getCurrentDate()}</p>
}

export default CurrentDate;