import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { App } from './App'
import { SideNavContextProvider } from './contexts/SideNavContext'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
   
   <SideNavContextProvider>

       <App />
   
   </SideNavContextProvider>
   
  </StrictMode>,
)
