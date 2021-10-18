import React, { useState } from "react";

const Counter = () => {
  const [brojac, setBrojac] = useState(0);

  // const menjanjeBrojac = (operacija) => {
  // if (operacija == "+") {
  //   console.log(brojac)
  //   brojac = brojac++;
  //   setBrojac(brojac);
  // } else if (operacija == "0") {
  //   brojac = 0;
  // } else {
  //   brojac = brojac--;
  // }
  // setBrojac(brojac);

  // //console.log(operacija)
const reset = ()=>{
  setBrojac(0)
}

const povecajTimeout =()=>{

setTimeout(() => {
  //ovo radi, ali bolje je funkciju proslediti kao parametar da se zadrzi(sacuva) prethodno stanje
  // setBrojac(brojac+1);
  setBrojac((prevState) => {
    return (prevState+1)})
}, 2000);
}
  return (
    <>
      <h2>Obican brojac</h2>
      <section>
        <h1>{brojac}</h1>
        <button
          type="button"
          className="btn"
          onClick={() => setBrojac(brojac + 1)}
        >
          Povecaj
        </button>
        <button type="button" className="btn" onClick={reset}>
          Ponisti
        </button>
        <button
          type="button"
          className="btn"
          onClick={() => setBrojac(brojac - 1)}
        >
          Smanji
        </button>
      </section>
      <h2>Brojac sa timeoutom od 2s</h2>
      <section>
        <h1>{brojac}</h1>
        <button
          type="button"
          className="btn"
          onClick={() => povecajTimeout()}
        >
          Povecaj posle dve sekunde
        </button>
       
      </section>
    </>
  );
};

export default Counter;
