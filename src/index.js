import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles.css'; // Make sure this points to your CSS file
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);