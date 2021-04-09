import React from 'react';

const Tab = ({active, title}) => {
    return (
        <div class={active === "true" ? "tab active" : "tab"}>
            {title}
        </div>
    )
}

export default Tab;