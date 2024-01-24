import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { FlagProvider } from "feature-toggles-react-sdk"

const osft_config =  {
  apiKey : import.meta.env.VITE_OSFT_PROD_KEY, 
  refreshRate : '10s', 
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <FlagProvider config={osft_config}>
      <App />
    </FlagProvider>
  </React.StrictMode>,
)
