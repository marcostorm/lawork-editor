import rainbow from "./rainbow.svg";
import "./App.css";
import Menu from "./menu";

function App() {
  return (
    <div className="App">
      <Menu />
      <header className="App-header">
        <img src={rainbow} className="rainbow" alt="logo" />
        <h1>Sejam bem-viados ao editor de texto da Lawork!</h1>
      </header>
    </div>
  );
}

export default App;
