import React, { useState } from 'react';
import Heading from './Heading';
import './App.css';

function App() {
  const [word, setWord] = React.useState('Eat'); // create a state variable called word and initialize it to 'Eat'

  function handleClick(word) {
    setWord('Drinking');  // update the state variable to 'Drink'
  }

  return (
    <div className="App">
      <Heading message={word + " at Little Lemon"} /> {/* pass the state variable to the Heading component */}
      <button onClick={handleClick}>Click here</button>
    </div>
  );
}

export default App;
