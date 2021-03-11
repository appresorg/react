import {useEffect} from 'react';

import logo from './logo.svg';
import './App.css';

function App() {
  useEffect(()=>{
    // mount
    const onReady = function(sender) {
      window.$$(window);
    }
    const onLanguageChange = function(sender) {
      window.$$(window);
    }
    window.$$().addEvent("onReady", onReady);
    window.$$().addEvent("onLanguageChange", onLanguageChange);

    return () => {
      // unmount
      window.$$().removeEvent("onReady", onReady);
      window.$$().removeEvent("onLanguageChange", onLanguageChange);  
    };
   }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p className="appres" appres="html">
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
