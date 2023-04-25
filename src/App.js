import logo from './images/Pokemon-Logo.png';
import './App.scss';
import pokemonBall from './images/pokeball.png';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div>
          <img src={logo} className="pokemonLogo" alt="logo" />
        </div>
        <img src={pokemonBall} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
