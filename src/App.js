
import React from 'react';
import { HashRouter } from 'react-router-dom';
import Main from './components/Main';
import './App.css';

function App() {
  return (
    <div className="App">
      <React.StrictMode>
        <HashRouter>
          <Main />
        </HashRouter>
      </React.StrictMode>
    </div>
  );
}

export default App;
