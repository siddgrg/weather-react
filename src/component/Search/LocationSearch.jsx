import React, { useState } from 'react';
import Dropdown from 'react-bootstrap/Dropdown';

const LocationSearch = ({ currentLocation, locations, setLocLonLat }) => {

    const [toggleTitle, setToggleTitle] = useState(currentLocation);

    const LocationToggle = React.forwardRef(({ children, onClick }, ref) => (
        <a
            href=""
            ref={ref}
            onClick={(e) => {
                e.preventDefault();
                onClick(e);
            }}
            className="locationToggle"
        >
            <span>{children}</span>
        </a>
    ));

    const locationDropdownItems = locations.map((l, i) => <Dropdown.Item key={i} eventKey={i}>{l}</Dropdown.Item>)

    const onSelectLocationHandle = (eventKey, e) => {
        setToggleTitle(e.target.text);
        setLocLonLat(eventKey);
    }

    return (
        <>
            <Dropdown className="locationDropdown" onSelect={onSelectLocationHandle}>
                <Dropdown.Toggle as={LocationToggle} id="location-toggle">{toggleTitle}</Dropdown.Toggle>
                <Dropdown.Menu>
                    {locationDropdownItems}
                </Dropdown.Menu>
            </Dropdown>
        </>
    )
}

export default LocationSearch;