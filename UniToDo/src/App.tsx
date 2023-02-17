import React, { useContext } from 'react'
import './App.css'
import { Header } from './Components/Header'
import { Body } from './Components/Body'
import { CountProvider } from './Components/Context/CountModal'
import {  TemaContext,TemaProvider } from './Components/Context/TemaContext'



function App() {
  const {isDarkMode} =  useContext(TemaContext)
  return (
    <div className={isDarkMode ? "light ":"dark"}>
        <CountProvider>
            <Header/>
            <Body/>     
        </CountProvider>
    </div>

  )
}

export default App
