import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header/Header'
import Button from './components/Header/Button/Button'
import Cards from './components/Cards/Cards'

function App() {
  return (
    <>
      <Header></Header>
      <Button>Sort by date</Button>
      <Cards></Cards>
      <Button>See More</Button>
    </>
  )
}

export default App
