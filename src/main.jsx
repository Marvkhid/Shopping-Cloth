import { StrictMode } from 'react'
import React from 'react';
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App';
import ShopContextProvider from './Componnets/Context/ShopContext';



createRoot(document.getElementById('root')).render(
  <StrictMode>
<ShopContextProvider>

              <App />
    </ShopContextProvider>
  </StrictMode>,
)