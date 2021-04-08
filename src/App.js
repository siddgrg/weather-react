import Header from './component/Header/Header';
import LocationSearch from './component/Search/LocationSearch';
import TabbedCards from './component/TabbedCards/TabbedCards';
import './res/css/App.css';

function App() {
  return (
    <div class="container">
      <Header />
      <LocationSearch />
      <TabbedCards />
    </div>
  );
}

export default App;
