import { useCallback, useEffect, useState } from 'react';
import React from 'react';
import './App.css';
import { useRef } from 'react';

function App() {
    
  const [length, setLength] = useState(12);
  const [numbers, setNumbers] = useState(false);
  const [special, setSpecial] = useState(false);
  const [password, setPassword] = useState('');

  //useref variable
  const passwordRef = useRef(null);

  const copyPassToClipboard = () => {
    passwordRef.current.select();  //select the text
    window.navigator.clipboard.writeText(passwordRef.current.value); //copy the text
    alert('Password copied to clipboard'); //alert the user

    
  }
  
const generatePassword  = useCallback(() => { 
    let length = document.getElementById('range').value;  
    console.log(length);
    setLength(length);  
    let pass = "";
    length = length || 20;
    let charset = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    if (numbers) charset += '0123456789';
    if (special) charset += '`-=[]{};\'\\:"|,./<>?!@#$%^&*()';
    for (let i = 0, n = charset.length; i < length; ++i) {
      pass += charset.charAt(Math.floor(Math.random() * n));
    }
    setPassword(pass);
  }, [length, numbers, special,setPassword] );
 
  useEffect( generatePassword , [length, numbers, special,generatePassword] );

  return (
    <>
      <div className="App">
        <h1>Password Generator</h1>
        <input
          type="text"
          value={password}
          placeholder='Your Password will appear here'
          readOnly
          style={{ width: 200 }}
          ref={passwordRef}
        />
        
        <button
          onClick={copyPassToClipboard}
        >copy</button>
        <input
          type="range"
          min="4"
          max="25"
          name='range'
          id='range'
          value={length}
        // onChange={generatePassword}     //we have to use useEffect to make it work
          onChange={(e)=>{setLength(e.target.value)}}
        /> 
        <label htmlFor="range" >Length: {length} </label> 
        

      <h3>{password}</h3>

        <input
          type="checkbox"
          name="Numbers"
          onClick={() => { setNumbers(!numbers) }}
        />
      <label htmlFor="Numbers">Numbers</label>

        <input
          type="checkbox"
          name="Special"
          onClick={() => { setSpecial(!special) }} />
        <label htmlFor="Special">Special</label>
        </div>
    </>
  );
}

export default App;
