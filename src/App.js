import React, { useState, useEffect, createContext } from 'react';
import Header from './component/Header/Header';
import LocationDropdown from './component/LocationDropdown/LocationDropdown';
import TabbedCards from './component/TabbedCards/TabbedCards';
import './res/css/App.css';
import axios from 'axios';
import { API_KEY, URL } from './CONSTS.json';
import LOCATIONS from './LOCATIONS.json';

function App() {

  const [location, setLocation] = useState(LOCATIONS[0].name);
  const [latitude, setLatitude] = useState(LOCATIONS[0].latitude);
  const [longitude, setLongitude] = useState(LOCATIONS[0].longitude);
  const [weatherData, setWeatherData] = useState({});
  const [dateTime, setDateTime] = useState();
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(null);

  const setLocLonLat = (index) => {
    setLatitude(LOCATIONS[index].latitude);
    setLongitude(LOCATIONS[index].longitude);
    setLocation(LOCATIONS[index].name);
  }

  useEffect(() => {
    setLoaded(false);
    axios.get(`${URL}/data/2.5/onecall?lat=${latitude}&lon=${longitude}&exclude=minutely,hourly,alerts&appid=${API_KEY}&units=metric`)
      .then(res => {
        setWeatherData(res.data);
        setDateTime(new Date((res.data.current.dt + res.data.timezone_offset - 3600) * 1000));
        setLoaded(true);
      })
      .catch(err => {
        setError(err);
        setLoaded(true);
        console.log(error);
      })
  }, [location, latitude, longitude]);

  useEffect(() => {
    if (loaded === true) {
      const bodyElem = document.querySelector('body');
      const currentHour = dateTime.getHours();

      if (currentHour < 5 || currentHour > 19) bodyElem.className = 'night';      // night: 20:00 to 04:59
      if (currentHour > 4 && currentHour < 11) bodyElem.className = 'morning';    // morning: 05:00 to 10:59
      if (currentHour > 10 && currentHour < 17) bodyElem.className = '';          // day: 11:00 to 16:59
      if (currentHour > 16 && currentHour < 20) bodyElem.className = 'evening';   // evening: 17:00 to 19:59
    }
  }, [dateTime, loaded])

  return (
    <div class="container mt-5">
      <div class="d-flex flex-column align-items-center">
        <Header />
        <LocationDropdown
          currentLocation={location}
          locations={LOCATIONS.map((l) => l.name)}
          setLocLonLat={setLocLonLat}
        />
        {loaded && error === null && <TabbedCards weatherData={weatherData} dateTime={dateTime} />}
        {loaded && error && <p>There was an error loading the weather</p>}
        {!loaded && <p>Loading...</p>}
      </div>
    </div>
  );
}

export default App;
