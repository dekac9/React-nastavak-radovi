import React from "react";
import Knjiga from "./Knjiga";
import "./App.css";
import {knjige} from "./podaci";


// const alert =()=>{
//   console.log("object")
// }
const App = () => {
  return (
    <div className="ispis">
      {knjige.map((element) => {
        return (
          <>
            <Knjiga key={element.id} {...element}></Knjiga>
            {/* <button onClick={alert}>Posalji</button> */}
          </>
        );
      })}
    </div>
  );
};

export default App;
