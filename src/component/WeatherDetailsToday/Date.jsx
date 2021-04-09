import React from 'react';

const TodayDate = () => {

    const getCurrentDate = () => {
        const currentDate = new Date();
        return `${currentDate.toLocaleTimeString([], { hour: `2-digit`, minute: `2-digit` })} - ` +
            `${currentDate.toLocaleDateString(`en-GB`, { weekday: `long`, year: `numeric`, month: `long`, day: `numeric` })}`
    }


    return <p class="todayDate">{getCurrentDate()}</p>
}

export default TodayDate;