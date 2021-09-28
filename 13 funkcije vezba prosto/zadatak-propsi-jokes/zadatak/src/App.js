import React from 'react'
import Joke from "./Joke"
import './App.css';

function App() {
  return (
    <div className="App">
      <Joke obj={{pitanje:"sta", odgovor: "aaaaaaaa"}}></Joke>
      <Joke obj={{pitanje:"koji", odgovor: "bbbbbbbbb"}}></Joke>
      <Joke obj={{pitanje:"", odgovor: "ddddddddd"}}></Joke>
      <Joke obj={{pitanje:"sta", odgovor: "vvvvvvvvvd"}}></Joke>
    </div>
  );
}

export default App;
