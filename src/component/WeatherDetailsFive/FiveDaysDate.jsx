import React from 'react';

const FiveDaysDate = ({ dateTime, dateOffset, timezoneOffset }) => {

    const date = new Date((dateTime + timezoneOffset - 3600) * 1000);
    date.setDate(date.getDate() + dateOffset);
    const dayString = date.toLocaleDateString(`en-GB`, { weekday: `short` });
    const dateString = date.toLocaleDateString(`en-GB`, { month: `long`, day: `numeric` });

    return (
        <>
            <p class="mb-0">{dayString},</p>
            <p class="mb-0">{dateString}</p>
        </>
    )

}

export default FiveDaysDate;