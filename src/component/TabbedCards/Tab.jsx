import React from 'react';

const Tab = ({active, title, setActiveTab}) => {

    const handleActiveTab = () => {
        if (title === 'Today') setActiveTab('today');
        if (title === '5 Days') setActiveTab('fiveDays');
    }

    return (
        <button class={active === true ? "tab active" : "tab"} onClick={handleActiveTab}>
            {title}
        </button>
    )
}

export default Tab;