import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Blog from './components/Blog/Blog'
const style = {
  fontSize: '30px',
  fontWeight: 600
}

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <h2>Welcome to react world</h2>
      <article style={style} className='blog'>Hello, World</article>
      <Blog heading='Man is mortal' author='Rakib Khan'></Blog>
      <Blog heading='Always speak the Truth' author='Shah Rukh Khan'></Blog>
      <Blog heading='Never tell a Lie' author='Aamir Khan'></Blog>
    </div>
  )
}

export default App
