import React, { useState } from "react";
import { data } from "./data";

const Useeffecthook = () => {
  const [people, setPeople] = useState(data);
  const removeItem = (id)=>{
    //console.log(id)
    let removed = people.filter((elem)=>elem.id!=id)
    setPeople(removed)
  }
  console.log(people);
  return (
    <>
      {people.map((elem) => {
        const{id,name}=elem
        return (
          <div key={id} className="item">
              <h4>{name}</h4>
             <button type="button"onClick={()=>removeItem(id)}>Remove person</button>
          </div>
        );
      })}
      <button type="button" className="btn" onClick={()=>setPeople([])}>
        Obrisi ljude
      </button>
    </>
  );
};

export default Useeffecthook;
