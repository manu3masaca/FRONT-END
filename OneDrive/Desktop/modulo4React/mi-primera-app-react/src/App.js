import logo from './logo.svg';
import './App.css';
// rederisacion texto de bienvenida
import Bienvenida from "./Bienvenida";
// rederisacion descripcion perfil
import Perfil from "./components/Perfil";


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        
        <Bienvenida/>
        <Perfil/>
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



