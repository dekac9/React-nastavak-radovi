import React, { Component } from 'react';
import Prikazi from './Prikazi';



class Dohvati extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      ime:[]
     }
     this.promena=this.promena.bind(this)
  }

  promena=()=>{
    let imeFilma=document.getElementById("ime").value;
    this.setState({ime:imeFilma})
    console.log(this.state.ime)
  }

  render() { 
    console.log(this.state.ime)
    return (
      
      <div>
      <input onChange={this.promena} id="ime"
            type="text"
            placeholder="Unesite ime filma"
          ></input>
          
          <Prikazi ime={this.state.ime}></Prikazi>
          </div>
    );
  }
}
 
export default Dohvati;