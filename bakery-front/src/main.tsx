import './index.css';
import { App } from './App';
import { BakeryContextProvider  } from './contexts/BakeryContext';
import { BrowserRouter } from 'react-router-dom';
import React from 'react';
import ReactDOM from 'react-dom/client';
 
 

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
    <BakeryContextProvider>

       <App />
   
   </BakeryContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);
