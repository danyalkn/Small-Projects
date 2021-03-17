import logo from "./linux-icon.png";
import "./App.css";

function Header() {
  return (
    <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title"> LinuxBuddies...</h1>
        <p>
          Coming Soon...
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Click to follow
        </a>
      </header>
  );
}

function App() {
  return (
    <div className="App">
      <Header />
    </div>
  );
}

export default App;
