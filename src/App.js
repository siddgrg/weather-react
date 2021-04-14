import React, { useState, useEffect } from 'react';
import Header from './component/Header/Header';
import LocationSearch from './component/Search/LocationSearch';
import TabbedCards from './component/TabbedCards/TabbedCards';
import './res/css/App.css';
import axios from 'axios';
import { API_KEY, URL } from './CONSTS.json';

function App() {

  const locations = [
    ['London', 51.5074, -0.1278],
    ['New Delhi', 28.7041, 77.1025],
    ['Tokyo', 35.6762, 139.6503],
    ['Shanghai', 31.2304, 121.4737],
    ['São Paulo', -23.533773, -46.625290],
    ['Mexico City', 19.4326, -99.1332],
    ['New York', 40.7128, -74.0060],
    ['Istanbul', 41.0082, 28.9784],
    ['Cairo', 30.0444, 31.2357],
    ['Pokhara', 28.2096, 83.9856]
  ]

  const [location, setLocation] = useState(locations[0][0]);
  const [latitude, setLatitude] = useState(locations[0][1]);
  const [longitude, setLongitude] = useState(locations[0][2]);
  const [weatherData, setWeatherData] = useState({});
  const [dateTime, setDateTime] = useState();
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(null);

  const setLocationHandle = (index) => {
    setLatitude(locations[index][1]);
    setLongitude(locations[index][2]);
    setLocation(locations[index][0]);
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
        <LocationSearch
          currentLocation={location}
          locations={locations.map((l) => l[0])}
          setLocationHandle={setLocationHandle}
        />
        {loaded && error === null && <TabbedCards weatherData={weatherData} />}
        {loaded && error && <p>There was an error loading the weather</p>}
        {!loaded && <p>Loading...</p>}
      </div>
    </div>
  );
}

export default App;
