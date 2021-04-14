import React from 'react';

const Tab = ({active, title, setActiveTab}) => {

    const handleActiveTab = () => {
        setActiveTab(title);
    }

    return (
        <button class={active === true ? "tab active" : "tab"} onClick={handleActiveTab}>
            {title}
        </button>
    )
}

export default Tab;