import './App.css';
import './PromptWindow.css';

function Header() {
  return(
    <header>
    <h1>/venatus/home</h1>
    <nav>
      <ul>
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">Puzzles</a>
        </li>
        <li>
          <a href="#">Leaderboard</a>
        </li>
        <li>
          <a href="#">Help</a>
        </li>
      </ul>
    </nav>
  </header>
  )
}

function SubmitButton() {
  return (
    <div>
      <button type='submit'>Submit</button>
    </div>
  );
}

function PromptWindow() {
  return (
    <div className='PromptWindow'>
      <h2>Prompt 1</h2>
        <form>
            <label for="prompt1">Enter your answer:</label>
            <input type="text" id="prompt1" name="prompt1" required></input>
            <SubmitButton />
        </form>
      
    </div>
  );
}

function App() {
  return (
    <div>
      <Header/>
      <PromptWindow/>
    </div>
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;