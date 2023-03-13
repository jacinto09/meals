import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { NextUIProvider, createTheme } from '@nextui-org/react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './index.css'
import { Meal } from './components/Meal'

const darkTheme = createTheme({
  type: 'dark'
})

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <NextUIProvider theme={darkTheme}>
        <Routes>
          <Route exact path='/' element={<App />} />
          <Route path='/:idMeal' element={<Meal />} />
        </Routes>
      </NextUIProvider>
    </BrowserRouter>
  </React.StrictMode>
)
