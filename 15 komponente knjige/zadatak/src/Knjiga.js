import React from 'react'
import "./App.css"

const Knjiga = (props) => {
  return (
    <div className="osnovno">
      <img src={props.slika}/>
      <h2 style={{color:"red"}}>{props.ime}</h2>
      <p>{props.autor}</p>
    </div>
  )
}

export default Knjiga
