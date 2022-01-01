// import all necessary packages, styles and components
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

// render the App component inside div with id="root"
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
