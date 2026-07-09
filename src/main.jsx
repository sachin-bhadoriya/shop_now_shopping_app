import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CartProvider from './context/CartContext.jsx';


createRoot(document.getElementById('root')).render(
  <CartProvider>
    <App />
  </CartProvider>,
)
