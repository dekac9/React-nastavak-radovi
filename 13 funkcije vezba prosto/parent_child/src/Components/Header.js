import React from 'react';
import "../App.js"

function Header(){
  return(
    <header>
      <h1>Naslov</h1>
      <ol className="lista">
        <li>Prva stvar</li>
        <li>Druga stvar</li>
        <li>Treca stvar</li>
      </ol>
    </header>
  )
}
export default Header