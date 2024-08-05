import React from 'react'
import './App.css'
import RouterSetup from './route/route'
import { Button, ThemeProvider } from '@mui/material'
import theme from './theme'

const App = () => {
  return (
   <ThemeProvider theme={theme}>
    <div className='overflow-hidden h-auto' style={{maxWidth:'2400px', margin:'auto'}}>
     <RouterSetup/> 
    </div>
   </ThemeProvider>  
  )
}

export default App