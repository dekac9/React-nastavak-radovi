import React from 'react'
import "./App.css"

const Knjiga = ({slika,ime,autor}) => {
  //let {slika,ime,autor}=props
  //prvi nacin, destruktuiras objekat props na propertije i njih nisanis

  //DRUGI NACIN
 // direktno u fju, umesto propsa, prihvaras destruktuiran objekat
  return (
    <div className="osnovno">
      <img src={slika}/>
      <h2 style={{color:"red"}}>{ime}</h2>
      <p>{autor}</p>
    </div>
  )
}

export default Knjiga
