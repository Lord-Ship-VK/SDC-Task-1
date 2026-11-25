import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

console.log(
  "%c🚀 SDC Review Panel: Welcome to the build.", 
  "color: #8AB4F8; font-size: 16px; font-weight: bold; background: #0B0D12; padding: 10px; border-radius: 5px;"
);
console.log(
  "%cI built this using Vite, React, and Tailwind, heavily prioritizing component modularity and responsive state management. Ready to contribute to the core team.", 
  "color: #E8EAF0; font-size: 12px;"
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
