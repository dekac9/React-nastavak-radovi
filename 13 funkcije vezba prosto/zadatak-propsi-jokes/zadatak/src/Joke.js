import React from "react";



function Joke (props) {
  console.log(props)
  let temp = props.pitanje;
  let karakt = temp?"block" : "none";
  let boja = temp?"black":"dodgerblue"
  return (
    <div className="kartica">
      <p style={{display:karakt}}>Pitanje: {props.pitanje}</p>
      <p style={{color:boja}}>Odgovor: {props.odgovor}</p>
    </div>
  );
}

export default Joke;
