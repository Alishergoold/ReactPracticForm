import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import App from './Components/App.js';
import Note from './Components/Note.js';

ReactDOM.render(
  <React.StrictMode>
    <App />
    <Note />
  </React.StrictMode>,
  document.getElementById('root')
);
