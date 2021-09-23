import React, { Component } from 'react';
import axios from 'axios';
import './App.css';

class Prikazi extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      sviFilmovi:[]
     }
     this.zahtev=this.zahtev.bind(this)
    }

    componentDidUpdate(Pp){
      if(this.props.ime!==Pp.ime){
        this.zahtev();
      }
    }
zahtev=()=>{
  let that=this
  let ime = this.props.ime

  const options = {
    method: 'GET',
    url: 'https://imdb-internet-movie-database-unofficial.p.rapidapi.com/search/'+ime,
    headers: {
      'x-rapidapi-host': 'imdb-internet-movie-database-unofficial.p.rapidapi.com',
    'x-rapidapi-key': '54844dcf6cmsh4da987bfe9e98aep174d83jsnc0c6a101636f'
    }
  };
  
  axios.request(options).then(function (response) {
    let obj=response.data;
    console.log(obj)
    console.log(obj.titles)
    that.setState({sviFilmovi:obj.titles})

  }).catch(function (error) {
    console.error(error);
  });
}
  render() { 
    
    return (
      <div>
        <ul>
                {this.state.sviFilmovi.map((svaki) => (
                  <li key={svaki.id}>
                    <div>
                      <img className="slike" src={svaki.image} alt={svaki.title}/>
                      
                      
                    </div>
                    <strong>{svaki.title}</strong>
                    <hr/>
                  </li>
                ))}
              </ul>
      </div>
      );
  }
}
 
export default Prikazi;