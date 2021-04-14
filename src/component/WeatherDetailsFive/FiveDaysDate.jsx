import React from 'react';

const FiveDaysDate = ({ dateTime, dateOffset }) => {

    const forecastDate = new Date(dateTime);
    forecastDate.setDate(forecastDate.getDate() + dateOffset);
    const dayString = forecastDate.toLocaleDateString(`en-GB`, { weekday: `short` });
    const dateString = forecastDate.toLocaleDateString(`en-GB`, { month: `long`, day: `numeric` });

    return (
        <>
            <p class="mb-0">{dayString},</p>
            <p class="mb-0">{dateString}</p>
        </>
    )

}

export default FiveDaysDate;