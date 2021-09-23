import React, { Component } from 'react';



class Dohvati extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      ime:[]
     }
  }

  onSubmit=()=>{
    let imeFilma=document.getElementById("ime").value;
    this.setState({ime:imeFilma})
    console.log(this.state.ime)
  }

  render() { 
    console.log(this.state.ime)
    return (
      
      <div>
      <input id="ime"
            type="text"
            placeholder="Unesite ime filma"
          ></input>
          <button type="submit" onClick={this.onSubmit}>Pronadji film po imenu</button>
          </div>
    );
  }
}
 
export default Dohvati;