
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Main from './components/Main';
import './App.css';

function App() {
  return (
    <div className="App">
      <React.StrictMode>
        <BrowserRouter>
          <Main />
        </BrowserRouter>
      </React.StrictMode>
    </div>
  );
}

export default App;
