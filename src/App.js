import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          I have learned to successfully deploy the Git
        </p>
        <p>
          First Step is to Build, then commit.
          Now Trying to Do Again<br/>
          First make changes &amp; commit.<br/>
          After That  $ npm run deploy<br/>
          then $ git push origin master
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learned to Deploy on Git
        </a>
      </header>
    </div>
  );
}

export default App;
