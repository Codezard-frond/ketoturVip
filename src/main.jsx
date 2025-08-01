import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { GlobalContextProvider } from './context/GlobalContext.jsx'
import { Toaster } from 'react-hot-toast'

createRoot(document.getElementById('root')).render(
  <GlobalContextProvider>
    <Toaster/>
    <App />
  </GlobalContextProvider>
)
