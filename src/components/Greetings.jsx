import React, { useState } from 'react'

const Greetings = () => {
  const [name , setname] = useState('');
  const [greeting , setGreeting] = useState();
  function setingName (e) {
    setname(e.target.value);
  }
  function greetings () {
    setGreeting(`Hello ${name}`);
  }
  return (
    <>
    <h2>Greetings</h2>
    <input type="text" placeholder='Enter Your Name' onChange={setingName}/>
    <button onClick={greetings}>Click here</button>
    <h2>{greeting}</h2>
    </>
  )
}

export default Greetings
