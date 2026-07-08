import { BrowserRouter } from "react-router-dom";
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Toaster } from "react-hot-toast";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <App />
      <Toaster
  position="bottom-right"
  toastOptions={{
    duration: 3000,
    style: {
      background: "#ffffff",
      color: "#1f2937",
      borderRadius: "12px",
      padding: "16px",
      border: "1px solid #E5E7EB",
      boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
    },
    success: {
      iconTheme: {
        primary: "#7C3AED",
        secondary: "#ffffff",
      },
    },
    error: {
      iconTheme: {
        primary: "#EF4444",
        secondary: "#ffffff",
      },
    },
  }}
/>
    </BrowserRouter>
  </StrictMode>,
)
