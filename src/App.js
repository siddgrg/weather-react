import React, { useState, useEffect } from 'react';
import Header from './component/Header/Header';
import LocationSearch from './component/Search/LocationSearch';
import TabbedCards from './component/TabbedCards/TabbedCards';
import './res/css/App.css';
import axios from 'axios';
import { API_KEY, URL } from './CONSTS.json';

function App() {

  const [location, setLocation] = useState('London')
  const [weatherData, setWeatherData] = useState([]);
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get(`${URL}/data/2.5/weather?q=${location}&appid=${API_KEY}&units=metric`)
      .then(res => { 
          setWeatherData(res.data);
          setLoaded(true);
      })
      .catch(err => { 
        setError(err);
        setLoaded(true);
      })
  }, [location])

  return (
    <div class="container">
      <div class="d-flex flex-column align-items-center">
        <Header />
        <LocationSearch />
        {loaded && error === null && <TabbedCards weatherData={weatherData} />}
        {loaded && error && <p>There was an error loading the weather</p>}
        {!loaded && <p>Loading...</p>}
      </div>
    </div>
  );
}

export default App;
