import React from 'react';

const Tab = ({ active, index, title, setActiveTab }) => {

    const handleActiveTab = () => {
        setActiveTab(index);
    }

    return (
        <button class={active === true ? "tab active" : "tab"} onClick={handleActiveTab}>
            {title}
        </button>
    )
}

export default Tab;