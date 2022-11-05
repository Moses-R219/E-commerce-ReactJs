import React from 'react';
import ReactDOM from 'react-dom/client';
<<<<<<< HEAD
import './index.scss';
import App from './App'
import { BrowserRouter } from 'react-router-dom';
=======
import  { BrowserRouter} from 'react-router-dom';
import './index.scss';
import App from './App';
>>>>>>> 95c4e9b18f4b2a467654cc52220cd01bb2f21dbe
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <App />
    </BrowserRouter>
<<<<<<< HEAD
    
=======
>>>>>>> 95c4e9b18f4b2a467654cc52220cd01bb2f21dbe
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
