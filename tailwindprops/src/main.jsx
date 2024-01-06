import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App userName="krishna" about='hello i have a crush on krishna' />
  </React.StrictMode>,
)
