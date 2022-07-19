import { Component } from "react";

class Pokemon extends Component {
  render() {
    const {
      id,
      name,
      type,
      averageWeight: { value, measurementUnit },
      image,
    } = this.props.pokemon;

    return (
      <li key={id}>
        <div>
          <h2>{name}</h2>
          <h3>{type}</h3>
          <p>Average weight: {value} {measurementUnit}</p>
        </div>
        <div>
          <img src={ image } alt="" />
        </div>
      </li>
    )
  }
}

export default Pokemon;
