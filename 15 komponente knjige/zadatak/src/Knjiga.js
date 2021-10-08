import React from 'react'
import "./App.css"

const Knjiga = ({ slika, ime, autor,id }) => {
  //console.log(props);
  //let { slika, ime, autor } = props;

  //let {slika,ime,autor}=props
  //prvi nacin, destruktuiras objekat props na propertije i njih nisanis

  //DRUGI NACIN
  // direktno u fju, umesto propsa, prihvaras destruktuiran objekat


  // UBACIVANJE EVENTA inline i kao posebna fja
  // onClick, onMouseOver
const klikFja=(a)=>{
console.log(a)
console.log(a.target)
}
const komplikovanije =(argument)=>{
  alert(argument)
}

  return (
    <div key={id} className="osnovno">
      <img
        src={slika}
        onClick={() => {
          alert(id);
        }}
      />
      <h2 style={{ color: "red" }}>{ime}</h2>
      <p>{autor}</p>
      <p>{id}</p>
      <button type="button" onClick={klikFja}>
        klikni me
      </button>
      <button
        type="button"
        onClick={() => {
          komplikovanije(id);
        }}
        onMouseOver={()=>{console.log(id)}}
      >
        kompkikovanija funkcionalnost
      </button>
    </div>
  );
};

export default Knjiga
