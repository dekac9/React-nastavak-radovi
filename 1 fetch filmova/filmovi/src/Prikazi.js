import React, { Component } from 'react';

class Prikazi extends Component {
  render() { 
    return (
      <div>
        <p>{this.props.ime}</p>
      </div>
      );
  }
}
 
export default Prikazi;