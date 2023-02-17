import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { TemaProvider } from './Components/Context/TemaContext'
import './index.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <TemaProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </TemaProvider>
)
