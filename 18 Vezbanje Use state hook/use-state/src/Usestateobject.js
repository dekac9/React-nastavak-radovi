import  React, {useState} from 'react'

const Usestateobject = () => {
  const[person,setPerson]=useState({
    name:"Peter",
    age:44,
    message:"Pozdrav"
  })

  const promeniPoruku = ()=>{
setPerson(person.message = 'CAO')
  }
  return (
    <>
      <h4>{person.name}</h4>
      <h4>{person.age}</h4>
      <h4>{person.message +" "+ person.name}</h4>
      <button type="button" onClick={promeniPoruku}></button>
    </>
  );
}

export default Usestateobject
