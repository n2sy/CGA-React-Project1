import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { FavoritesContextProvider } from './store/favorites-context';
import { LogniContextProvider } from './store/login-context';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <LogniContextProvider>
    <FavoritesContextProvider>
        
        <BrowserRouter>
             <App />
        </BrowserRouter>
    </FavoritesContextProvider>
    </LogniContextProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
