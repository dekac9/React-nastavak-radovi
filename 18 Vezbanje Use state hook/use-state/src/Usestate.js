import React from "react";
import {useState} from "react"

const UseStateHook = () => {
  const[state,setState]=useState("pocetak")

  const kliknuto = ()=>{
// setState("promenjeno")

if(state=="pocetak"||state=="zamenjeno"){
 setState("promenjeno");
}else{
  setState("zamenjeno");
}

  }


  return <React.Fragment>
  <h2>{state}</h2>
  <button type="button" class="btn" onClick={kliknuto}>Klikni me</button>
  </React.Fragment>
};

export default UseStateHook;
