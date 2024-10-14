import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import RootLayout from './RootLayout'

function App() {
  console.log('App component rendered')
  return (
    <Router>
      <RootLayout />
    </Router>
  )
}

export default App