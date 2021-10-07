
import React from 'react'
import Knjiga from "./Knjiga"
import "./App.css";


const knjige = [
  {
    slika:
      "https://images-na.ssl-images-amazon.com/images/I/51MB5SD5GIL._SX218_BO1,204,203,200_QL40_FMwebp_.jpg",
    ime: "Little Blue Truck's Halloween Board book – Lift the flap",
    autor: "Alice Schertle",
  },
  {
    slika:
      "https://images-na.ssl-images-amazon.com/images/I/51MB5SD5GIL._SX218_BO1,204,203,200_QL40_FMwebp_.jpg",
    ime: "Little Blue Truck's Halloween Board book – Lift the flap",
    autor: "Alice Schertle",
  },
  {
    slika:
      "https://images-na.ssl-images-amazon.com/images/I/51MB5SD5GIL._SX218_BO1,204,203,200_QL40_FMwebp_.jpg",
    ime: "Little Blue Truck's Halloween Board book – Lift the flap",
    autor: "Alice Schertle",
  },
  {
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
        let {slika,ime,autor} = element
      return (
        <Knjiga slika={slika} ime={ime} autor={autor}></Knjiga>
      )
      
      })}
    </div>
  );
}

export default App
