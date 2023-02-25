import { useState } from "react";
import "./styles.css";

function App() {

  const [userInput, setUserInput] = useState("");

  function updateLength(e){

    setUserInput(Number(e.target.value.length));
  
  }

  return (
    <div className="layout">
      <h1>LETTERS ENTERED: {userInput}</h1>
      <input onChange={updateLength}></input>
    </div>
  );
}

export default App;
