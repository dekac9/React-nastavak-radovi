import React from 'react'



function Joke(props){
 if(props.obj.pitanje!==""){
  console.log(props.obj.pitanje)
  return (
<div className="kartica">
<p>Pitanje: {props.obj.pitanje}</p>
<p>Odgovor: {props.obj.odgovor}</p>
</div>
  )
 }else{
   return (
    <div className="kartica">
    <p>Odgovor: {props.obj.odgovor}</p>
    </div>
   )
 }
  

}

export default Joke