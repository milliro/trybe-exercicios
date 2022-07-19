import React, { Component } from "react";
import Pokemon from './Pokemon'
import PropTypes from 'prop-types'

class Pokedex extends Component {
  render() {
    const { pokemons } = this.props

    const pokemonsHtmlElements = pokemons.map((pokemon) => {
      return <Pokemon key={pokemon.id} pokemon={pokemon}/>
    })
    return (
      <div>
        <h1>Pokedex</h1>
        <ul>
          {pokemonsHtmlElements}
        </ul>
      </div>
    )
  }
}

Pokedex.propTypes = {
  pokemons: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    type: PropTypes.string,
    averageWeight: PropTypes.shape({
      value: PropTypes.number,
      measurementUnit: PropTypes.string,
    }),
    image: PropTypes.string,
  }))
}

export default Pokedex;
