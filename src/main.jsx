import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { NextUIProvider, createTheme } from '@nextui-org/react'

const darkTheme = createTheme({
  type: 'dark'
})

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <NextUIProvider theme={darkTheme}>
      <App />
    </NextUIProvider>
  </React.StrictMode>
)
