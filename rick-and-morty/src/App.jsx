import Cards from './components/Cards/Cards.jsx'
import SearchBar from './components/SearchBar/SearchBar.jsx'
import characters from './data.js'

function App() {
  return (
    <>
      <div className="App">
        <div>
          <SearchBar onSearch={(characterID) => window.alert(characterID)} />
        </div>
        <hr />
        <div>
          <Cards characters={characters} />
        </div>
      </div>
    </>
  );
}

export default App;

