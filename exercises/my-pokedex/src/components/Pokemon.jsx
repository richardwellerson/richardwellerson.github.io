import React from 'react';

class Pokemon extends React.Component {
  render() {
    const { pokemons } = this.props
    console.log(pokemons)
    return(
      <p>Show</p>
    )
  }
}

export default Pokemon;
