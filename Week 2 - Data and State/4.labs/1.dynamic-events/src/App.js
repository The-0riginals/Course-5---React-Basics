function App() {
  function handleClick() {
    let randomNum = Math.floor(Math.random() * 3) + 1;
    console.log(randomNum);
    let userIput = prompt("Enter a number between 1 and 3");
    alert(`Computer number: ${randomNum}, your guess: ${userIput}`);
  }
  return (
    <div>
      <h1>Task: Add a button and handle a click event</h1>
      <button onClick={handleClick}>Guess the number between 1 and 3. </button>
    </div>
  );
}

export default App;
