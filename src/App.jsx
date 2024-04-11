import React from 'react'
import './App.css'
import Header from './components/header/Header'
import AppRoutes from './routes/AppRoutes'

const App = () => {
  return (
    <div className="app">
        <Header />
      
        <AppRoutes/>
       </div>

  )
}

export default App