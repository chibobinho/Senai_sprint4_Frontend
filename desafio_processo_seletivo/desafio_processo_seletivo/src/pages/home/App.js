import logo from './logo512.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Bem vindo ao pesquisador de repositórios GitHub
        </p>
        <a
          className="App-link"
          href="http://localhost:3000/pesquisar"
        >
          Vamos lá
        </a>
      </header>
    </div>
  );
}

export default App;