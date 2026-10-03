import { useState } from "react";
import "./App.css"
function App()
{
  const[randomNumber, setRandomNumer]= useState(0);

  function randomNumberGenerate()
  {
    const number=(Math.floor(Math.random()*100)+1);
    setRandomNumer(number);
  }
  return(
    <div className="display">
    <h1 className="random">Random Number Generator</h1>
    <h2 className="number">{randomNumber}</h2>
    <div className="button">
    <button className="btn" onClick={randomNumberGenerate}>Random Number</button>
    </div>
    </div>
  );
}
export default App