import React from 'react';

const IconDesc = ({ data }) => {

    const [weather] = data;
    const { main, icon } = weather;

    return (
        <div class="text-center">
            <img 
                src={`http://openweathermap.org/img/wn/${icon}@2x.png`} 
                alt="weather icon"
                class="img-fluid"
            />
            <p>{main}</p>
        </div>
    )
}

export default IconDesc;