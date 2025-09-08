import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './input.css'
import App from './App.tsx'
import ScrollOnLoad from './ScrollOnLoad'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ScrollOnLoad />
    <App />
  </StrictMode>,
)
