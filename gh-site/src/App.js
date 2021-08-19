import React from 'react';
import logo from './logo.svg';
import './App.css';

//react markdown libs
import ReactMarkdown from 'react-markdown'
import Menu from "./Menu";
//simple markdown literal text
const markdown =
    `# Maybe 
    - first list
    - second list
    - third list
     - sublist
    - sub sublist
     `

function App() {
  return (
    <div className="App">
      <Menu/>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
              Don't worry, I'm working on it.
          </p>
          {/* we can add the mardkwon like this later */}
          {/*<ReactMarkdown children={markdown}/>*/}
        </header>
    </div>
  );
}

export default App;
