import React from "react";

function Kartica(props) {
  console.log(props)
  return (
    <div className="kartica">
      <img src={props.kontakt.urlSlika}></img>
      <h3>{props.kontakt.ime}</h3>
      <p>{props.kontakt.telefon}</p>
      <p>{props.kontakt.adresa}</p>
    </div>
  );
}

export default Kartica;
