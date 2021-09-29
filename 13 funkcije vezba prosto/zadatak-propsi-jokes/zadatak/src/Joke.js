import React from "react";



function Joke(props) {
  let temp = props.obj.pitanje;
  let karakt = temp?"block" : "none";
  let boja = temp?"black":"dodgerblue"
  return (
    <div className="kartica">
      <p style={{display:karakt}}>Pitanje: {props.obj.pitanje}</p>
      <p style={{color:boja}}>Odgovor: {props.obj.odgovor}</p>
    </div>
  );
}

export default Joke;
