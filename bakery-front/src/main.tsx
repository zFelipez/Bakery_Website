import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { App } from './App'
import { BakeryContextProvider  } from './contexts/BakeryContext'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
   
   <BakeryContextProvider>

       <App />
   
   </BakeryContextProvider>
   
  </StrictMode>,
)
