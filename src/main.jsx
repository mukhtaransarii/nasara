import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter } from "react-router-dom";
import App from './App.jsx'
import { CartProvider } from './API/CartContext.jsx'
import { AuthProvider } from "./API/AuthContext.jsx";

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <BrowserRouter>
    <AuthProvider>
      <CartProvider>
          <App />
      </CartProvider>
     </AuthProvider>
   </BrowserRouter>
  </StrictMode>,
)
