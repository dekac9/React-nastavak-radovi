import React from 'react'
import Joke from "./Joke"
import jokes from './jokesData';
import './App.css';

console.log(jokes)
var data=jokes;

function App() {
  data.map((element)=>{
    var pitanja=element.pitanje;
    var odgovori=element.odgovor;
    return (
    <div className="App">
      <Joke obj={{pitanje:{pitanja}, odgovor: {odgovori}}}></Joke>
      
    </div>
  );
  })
  
}

export default App;
