import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import inventoryReducer from './inventorySlice'; 
import App from './App';

const store = configureStore({
  reducer: { 
    inventory: inventoryReducer 
  }
});

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Provider store={store}>
      {/* Kunci perbaikan rute ada di basename ini */}
      <BrowserRouter basename="/sts10">
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);