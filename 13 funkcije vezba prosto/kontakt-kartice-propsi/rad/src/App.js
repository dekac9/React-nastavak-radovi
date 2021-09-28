import React from "react";

import "./App.css";
import Kartica from "./Kartica";



function App() {
  return (
    <div className="container">
      <Kartica kontakt={{ime:"Cudnooka macka",
  urlSlika:"https://upload.wikimedia.org/wikipedia/commons/a/a3/June_odd-eyed-cat.jpg",
  telefon:"Telefon: Neki",
  adresa:"Adresa: Negde"}}
        
      >
      </Kartica>
      <Kartica kontakt={{ime:"Dve macke",
  urlSlika:"https://upload.wikimedia.org/wikipedia/commons/2/27/Black_white_cats.jpg",
  telefon:"Telefon: Neki DRUGI",
  adresa:"Adresa: Negde DRUGDE"}}
        
      >
      </Kartica>
    </div>
  );
}

export default App;
