import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Toaster } from 'react-hot-toast';
import CounterProvider from './context/ToDoContext.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CounterProvider>
    <Toaster
      position="top-center"
      reverseOrder={false}
    />
    <App />
    </CounterProvider>
  </StrictMode>,
)
