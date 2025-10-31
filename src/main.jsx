import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'bootstrap-icons/font/bootstrap-icons.css'
import './index.css'

import App from './App.jsx'
import Briefing from './assets/components/Briefing.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/briefing" element={<Briefing />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
