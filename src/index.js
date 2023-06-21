import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {BrowserRouter, Route, Routes} from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  {/* <Router>
    <Routes>
      <Route exact path="/" element= {<App />} />
    </Routes>
  </Router> */}
  <BrowserRouter>
    <App />
  </BrowserRouter>
  </React.StrictMode>
);

