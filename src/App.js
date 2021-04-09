import Header from './component/Header/Header';
import LocationSearch from './component/Search/LocationSearch';
import TabbedCards from './component/TabbedCards/TabbedCards';
import './res/css/App.css';

function App() {
  return (
    <div class="container">
      <div class="d-flex flex-column align-items-center">
        <Header />
        <LocationSearch />
        <TabbedCards />
      </div>
    </div>
  );
}

export default App;
