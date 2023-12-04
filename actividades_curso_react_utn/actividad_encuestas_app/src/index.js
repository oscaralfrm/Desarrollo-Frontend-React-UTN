import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Saludo from './components/Saludo';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <Saludo nombre1='Oscar' nombre2='María' nombre3='Franklin'/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
