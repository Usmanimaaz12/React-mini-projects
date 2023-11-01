import React from 'react';
import Card from './components/Card';
import './App.css'

function App() {

  const [counter, setCounter] = React.useState(0);

  return (
    
    <>
      {/* add counter button */}
      <h1>{counter}</h1>  
      <button onClick={() => setCounter(counter + 1)}>Add Counter</button>
      <Card about="Windows" />
      <Card />
      

    </>
  )
}

export default App
