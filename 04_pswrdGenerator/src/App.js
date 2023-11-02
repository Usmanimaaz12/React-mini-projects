import { useState } from 'react';
import React from 'react';
import './App.css';

function App() {
  const [password, setPassword] = useState(''); // useState is a hook
  const [length, setLength] = useState(20);
  const [character, setCharacter] = useState(true); 
  const [numbers, setNumbers] = useState(true);
  const [special, setSpecial] = useState(true);

  function generatePassword() {
     let length = document.getElementById('range').value;
    console.log(length);
    setLength(length);  
    length = length || 20;
    let charset = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    if (character) charset += '!@#$%^&*()';  
    if (numbers) charset += '0123456789';
    if (special) charset += '`-=[]{};\'\\:"|,./<>?';
    let password = '';
    for (let i = 0, n = charset.length; i < length; ++i) {
      password += charset.charAt(Math.floor(Math.random() * n));
    }
    setPassword('password');
  }

  return (
    <>
      <div className="App">
      <input type="text" value={password} readOnly/>
      <button>copy</button>
      <input type="range" min="4" max="20" name='range' id='range' onChange={generatePassword}/> 
      <label htmlFor="range">Length: {length} </label> 
      <h3>{password}</h3>
      <input type="checkbox" name="character" />
      <label htmlFor="character">Character</label>

      <input type="checkbox" name="Numbers" />
      <label htmlFor="Numbers">Numbers</label>

      <input type="checkbox" name="Special" />
        <label htmlFor="Special">Special</label>
        </div>
    </>
  );
}

export default App;
