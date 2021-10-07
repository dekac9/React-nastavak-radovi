
import React from 'react'
import Knjiga from "./Knjiga"
import "./App.css";


const knjige = [
  {
    id: 1,
    slika:
      "https://images-na.ssl-images-amazon.com/images/I/51MB5SD5GIL._SX218_BO1,204,203,200_QL40_FMwebp_.jpg",
    ime: "Little Blue Truck's Halloween Board book – Lift the flap",
    autor: "Alice Schertle",
  },
  {
    id: 2,
    slika:
      "https://images-na.ssl-images-amazon.com/images/I/51MB5SD5GIL._SX218_BO1,204,203,200_QL40_FMwebp_.jpg",
    ime: "Little Blue Truck's Halloween Board book – Lift the flap",
    autor: "Alice Schertle",
  },
  {
    id: 3,
    slika:
      "https://images-na.ssl-images-amazon.com/images/I/51MB5SD5GIL._SX218_BO1,204,203,200_QL40_FMwebp_.jpg",
    ime: "Little Blue Truck's Halloween Board book – Lift the flap",
    autor: "Alice Schertle",
  },
  {
    id: 4,
    slika:
      "https://images-na.ssl-images-amazon.com/images/I/51MB5SD5GIL._SX218_BO1,204,203,200_QL40_FMwebp_.jpg",
    ime: "Little Blue Truck's Halloween Board book – Lift the flap",
    autor: "Alice Schertle",
  },
];



const App = () => {
  return (
    <div className="ispis">
      {knjige.map((element) =>{

      return (
        <Knjiga key={element.id} {...element}></Knjiga>
      )
      
      })}
    </div>
  );
}

export default App
