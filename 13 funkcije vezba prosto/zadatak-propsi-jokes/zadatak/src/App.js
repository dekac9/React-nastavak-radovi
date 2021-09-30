import React from "react";
import Joke from "./Joke";
import jokes from "./jokesData";
import "./App.css";

//console.log(jokes)
var data = jokes;

console.log(typeof(data))

function App() {
  let vicevi = data.map((element) => {
    return (<Joke key={element.id} pitanje={element.pitanje} odgovor={element.odgovor}></Joke>);

  });
  return (<div>
    { vicevi }
  </div>)
  
}

export default App;
