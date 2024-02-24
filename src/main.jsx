import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import '../src/assets/styles/index.css'
import { BrowserRouter as Router} from 'react-router-dom'
ReactDOM.createRoot(document.getElementById('root')).render(
  
  <React.StrictMode>
  <Router>
  <React.Suspense fallback={()=><div>..loading</div>}>
  <App />
  </React.Suspense>
  </Router>
  
  </React.StrictMode>,
)
