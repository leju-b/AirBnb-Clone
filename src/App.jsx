import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavBar from "./components/Header/header"
import Hero from "./components/Hero_section/hero"
import Section_one from "./components/Section1/section1"


function App() {
  const [count, setCount] = useState(0)

  return(
    <div>
      <NavBar/>
      <Hero />
      <Section_one />
    </div>
  )
}

export default App
