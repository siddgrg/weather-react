import React from 'react';

const FiveDaysTemp = ({ temp }) => {

    const tempMax = Math.round(temp.max);
    const tempMin = Math.round(temp.min);

    return (
        <>
            <p class="mb-0 tempMax">{tempMax}&deg;C</p>
            <p class="mb-0 tempMin">{tempMin}&deg;C</p>
        </>
    )
}

export default FiveDaysTemp;