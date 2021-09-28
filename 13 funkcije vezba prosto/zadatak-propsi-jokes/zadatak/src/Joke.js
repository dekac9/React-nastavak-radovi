import React from "react";



function Joke(props) {

  return (
    <div className="kartica">
      <p style={{display:!props.obj.pitanje && "none"}}>Pitanje: {props.obj.pitanje}</p>
      <p>Odgovor: {props.obj.odgovor}</p>
    </div>
  );
}

export default Joke;
