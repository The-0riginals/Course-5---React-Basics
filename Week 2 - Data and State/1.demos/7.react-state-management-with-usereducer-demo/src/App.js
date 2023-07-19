import { useReducer } from 'react';

const reducer = (state, action) => {  
  if (action.type === 'ride') return { money: state.money + 10 , fruit: state.fruit };
  if (action.type === 'fuel') return { money: state.money - 50, fruit: state.fruit + 1 };
  return new Error();
}

function App() {

  const initialState = { money: 100, fruit: 5 };   // create an initial state object ,{} is the sign for an object
  const [state, dispatch] = useReducer(reducer, initialState); // use the useReducer hook to create a state and a dispatch function
  // dispatch is the function that will be called to update the state
  
  return (
    <div className="App">
      <h1>Wallet: {state.money}</h1>
      <h1>Fruit: {state.fruit}</h1>
      <div>
        <button onClick={() => dispatch({ type: 'ride' })}>
          A new customer!
        </button>
        <button onClick={() => dispatch({ type: 'fuel' })}>
          Refill the tank!
        </button>
        {console.log(state)}
      </div>
    </div>
  );
}

export default App;
