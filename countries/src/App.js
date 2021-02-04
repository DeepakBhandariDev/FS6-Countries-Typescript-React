import './App.css';
import CountryTable from './components/CountryTable';
import Search from './components/Search';
import useCountries from './hooks';

function App() {
  const [error, countries] = useCountries()
  return (
    <div className="App">
      <Search />
      <CountryTable countries={countries}/>
    </div>
  );
}

export default App;
