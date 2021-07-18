import React, { Component } from 'react';
import pokedex from './img/pokedex.png';
import pika from './img/pikachu.png';
import char from './img/charmander.png';
import bulb from './img/bulbasaur.png';
import squ from './img/squirtle.png';

import './App.css';
//const SERVER_URL = 'http://localhost:5000/users';

const poke = [squ, char, bulb, pika ];

// IMPORT ROUTES
//const usersRoute = require('./../routes/usersRoute.js');
//const pokemonRoute = require('./../../routes/pokemonRoute.js');


// ROUTES
//app.use('/users', usersRoute)
//app.use('/pokemon', pokemonRoute)



class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      pokemon: []
    };
  }

  async componentDidMount() {
    const SERVER_URL = '/pokemon';
    const res = await fetch(SERVER_URL);
    const data_json = await res.json();
    console.log(data_json);
    this.setState({ pokemon: data_json.data });
  }


 

  render() {
  

    return (

      <div className="App">
        <header className="App-header">

          <img src={pokedex} style={{ height: `200px`, }} alt="logo" />

          <h1 className="App-title" style={{ fontSize: `30px` }}>pokedex: pokemon app</h1>
          <p style={{ fontSize: `15px` }}>REACT JS, EXPRESS, NODE JS, sqite3, bootstrap, scss</p>

          {this.state.pokemon.map( pokemon =>
            <div class="card" style={{ marginBottom: `30px`, padding: `20px`, borderRadius: `5px`, backgroundColor: `#fff`, color: `#282c34` }}>
            
              <temp>
                <img src={ poke[pokemon.id - 1] } style={{ height: `170px` }} alt="img" />
                <ul key={pokemon.id} style={{ fontSize: `19px` }}>
                  <li>{ pokemon.name } </li>
                  <li>{ pokemon.type }</li>
                </ul>
              </temp>
            </div>
          )}


        </header>
        

      </div>

    );
  }
}


export default App;