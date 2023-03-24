import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
const style ={
  fontSize : '30px',
  fontWeight : 600
}

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <article style={style} className='blog'>Hello, World</article>
    </div>
  )
}

export default App
