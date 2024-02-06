import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

/*

This is the entry point of our React application.

TLDR: React is grabbing the <div id='root' element
from our index.html file and rendering the <App />
component there.

*/

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
