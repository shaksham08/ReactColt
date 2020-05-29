import React, { Component } from "react";
import "./Pokicard.css";

// const pokiApi =
//   "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/";
const pokiApi = "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/";
const padToThree = (number) =>
  number <= 999 ? `00${number}`.slice(-3) : number;
const Pokecard = class Pokecard extends Component {
  render() {
    let imgSrc = `${pokiApi}${padToThree(this.props.id)}.png`;
    return (
      <div className="Pokecard">
        <h1 className="Pokecard-title">{this.props.name}</h1>
        <img src={imgSrc} alt={this.props.name} />
        <div className="Pokecard-data">Type : {this.props.type}</div>
        <div className="Pokecard-data">Exp : {this.props.exp}</div>
      </div>
    );
  }
};

export default Pokecard;
