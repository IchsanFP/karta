import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { HashRouter } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";

createRoot(document.getElementById('root')).render(
  <HashRouter>
      <ScrollToTop />
    <StrictMode>
      <App />
    </StrictMode>,
  </HashRouter>
)

