import React from 'react';

// var css={
//   border: "black solid 1px",
//   color:"red",
//   textAlign:"center",
//   margin:"50px"
//   // marginBottom:"30px",
//   // marginLeft:"50px"
// }

// function Products(props){

// return (<div style={css}>
//   <p>ID:{props.id}</p>
//   <p>IME:{props.name}</p>
//   <p>PRICE:{props.price}</p>
//   <p>DESC:{props.proizvod.desc}</p>


// </div>
// )
// }

// export default Products;



// PRIHVATAO I RASTURAO OBJ UMESTO PROPSA
// var css={
//   border: "black solid 1px",
//   color:"red",
//   textAlign:"center",
//   margin:"50px"
//   // marginBottom:"30px",
//   // marginLeft:"50px"
// }

// function Products(props){

// return (<div style={css}>
//   <p>ID:{props.id}</p>
//   <p>IME:{props.proizvod.name}</p>
//   <p>PRICE:{props.proizvod.price.toLocaleString('en-US', {
//   style: 'currency',
//   currency: 'USD',
//   //DODATO ZA CENOVNI STRING
// })}</p>
//   <p>DESC:{props.proizvod.desc}</p>


// </div>
// )
// }

// export default Products;


//DODATI DUGMICI NA SVAKOJ KOMP< NA KLIK IZBACUJU DESC PROPERTI IZ OBJEKTA
var css={
  border: "black solid 1px",
  color:"red",
  textAlign:"center",
  margin:"50px"
  // marginBottom:"30px",
  // marginLeft:"50px"
}

function Products(props){
const opis=props.proizvod.desc;
console.log(opis)
function alarm(){
  alert(opis)
}

return (<div style={css}>
  
  <p>ID:{props.id}</p>
  <p>IME:{props.proizvod.name}</p>
  <p>PRICE:{props.proizvod.price.toLocaleString('en-US', {
  style: 'currency',
  currency: 'USD',
  //DODATO ZA CENOVNI STRING
})}</p>
  <p>DESC:{props.proizvod.desc}</p>
  <button onClick={alarm}>Klikni me za description</button>


</div>
)
}

export default Products;