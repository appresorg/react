import {useEffect} from 'react';

import logo from './logo.svg';
import './App.css';

function App() {
  useEffect(()=>{
    setTimeout(() => {
      window.$$().ready(function(){
        window.$$(window, -1)
      });
    }, 100);
   })

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link appres"
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
