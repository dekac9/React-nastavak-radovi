import React from "react";
import Joke from "./Joke";
import jokes from "./jokesData";
import "./App.css";

//console.log(jokes)
var data = jokes;
//console.log(typeof(data))
//console.log(data)

// function App() {
//   let vicevi = data.map((element) => {
//     return (<Joke key={element.id} pitanje={element.pitanje} odgovor={element.odgovor}></Joke>);

//   });
//   return (<div>
//     { vicevi }
//   </div>)

// }

console.log(data)
function App() {
  let vicevi = data.filter(element =>
    element.pitanje === "").map((elem)=>{
      return (
        <Joke
          key={elem.id}
          pitanje={elem.pitanje}
          odgovor={elem.odgovor}
        ></Joke>
      );
    })
      
    

  //console.log(vicevi);
  return <div>{vicevi}</div>;
}
export default App;
