import React from 'react';
import logo from './logo.svg';
import './App.css';

import Menu from "./Menu";
import MarkdownEntry from "./MarkdownEntry";


function App() {

  return (
    <div className="App">
      <Menu/>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
              Don't worry, I'm working on it.
          </p>
          {/* we can add the markdown like this later */}
            <MarkdownEntry/>
        </header>
    </div>
  );
}

export default App;
