import React from 'react';

const FiveDaysDate = ({ date }) => {

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