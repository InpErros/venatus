import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
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

//export default App;


function SubmitButton() {
  return (
    <button>Submit Answer</button>

  );
}

function PromptWindow() {
  return (
    <div>
      <h1>Prompt Window</h1>
      <p>Prompt Here</p>
      <SubmitButton />
    </div>
  );
}

export default PromptWindow;