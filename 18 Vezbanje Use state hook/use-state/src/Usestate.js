import React from "react";
import { useState } from "react";

const UseStateHook = () => {
  const [state, setState] = useState("pocetak");

  const kliknuto = () => {
    //PRVI NACIN
    // setState("promenjeno")

    //DRUGI NACIN
    // if(state=="pocetak"||state=="zamenjeno"){
    //  setState("promenjeno");
    // }else{
    //   setState("zamenjeno");
    // }

    //TERNARNO, JOS KRACE
    state == "pocetak" ? setState("promenjeno") : setState("pocetak");
  };

  return (
    <React.Fragment>
      <h2>{state}</h2>
      <button type="button" className="btn" onClick={kliknuto}>
        Klikni me
      </button>
    </React.Fragment>
  );
};

export default UseStateHook;
