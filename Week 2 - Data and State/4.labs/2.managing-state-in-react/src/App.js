import React from 'react';
import Fruits from './Fruits.js';
import FruitsCounter from './FruitsCounter.js';

function App() {
  const [fruits] = React.useState([
    {fruitName:'Apple', id: 0},
    {fruitName:'Apple', id: 1},
    {fruitName:'Plum', id: 2},
    {fruitName:'Pineapple', id: 3},
  ]);
  return (
    <div className="App">
      <h1>Fruit Store</h1>
      <Fruits fruits={fruits} />
      <FruitsCounter fruits={fruits}/>
    </div>
  );
}

export default App;
