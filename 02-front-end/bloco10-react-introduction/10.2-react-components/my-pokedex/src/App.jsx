import React, { Component } from 'react';
import data from './data'
import Pokedex from './components/Pokedex'

class App extends Component {
  render() {
    return (
      <main>
        <Pokedex pokemons={ data }/>
      </main>
    )
  }
}

export default App;
