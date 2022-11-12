import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import AppProvider, { AppContext } from './Context';

import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AppContext.Provider>

      <App />
    </AppContext.Provider>
  </React.StrictMode>
);

