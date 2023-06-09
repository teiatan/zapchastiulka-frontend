import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import { ContextProvider } from 'context/contextProvider';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ContextProvider>
      <BrowserRouter basename="zapchastiulka-frontend">
        <App />
      </BrowserRouter>
    </ContextProvider>
  </React.StrictMode>
);
