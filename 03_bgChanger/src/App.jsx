import { useState } from 'react'
import React from 'react'
import './App.css'

function App() {
  
  const [color, setColor] = useState('black')
  function handleClick() {
    let btncolor = window.event.target.style.backgroundColor
    console.log(btncolor)
    setColor(btncolor)
  }

  return (
    <>
      <div className="App" style={{ backgroundColor: color }}>
        <h1>Background Color Changer</h1>
        <button style={{backgroundColor: 'red'}} onClick={handleClick} >Button 1</button>
        <button style={{backgroundColor: 'blue'}} onClick={handleClick} >Button 2</button>
        <button style={{backgroundColor: 'green'}} onClick={handleClick} >Button 3</button>
        <button style={{backgroundColor: 'yellow'}} onClick={handleClick} >Button 4</button>
        <button style={{backgroundColor: 'purple'}} onClick={handleClick} >Button 5</button>
      </div>

    </>
  )
}

export default App
