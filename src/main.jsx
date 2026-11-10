import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

console.log(
  "%c🚀 SDC Review Panel: Welcome to the build.", 
  "color: #3DDC84; font-size: 16px; font-weight: bold; background: #090D0B; padding: 10px; border-radius: 5px;"
);
console.log(
  "%cI built this using Vite, React, and Tailwind, heavily prioritizing component modularity and responsive state management. Ready to contribute to the core team.", 
  "color: #F3F4F6; font-size: 12px;"
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
