import React, { Component } from "react";
import Pokecard from "./Pokecard";
import "./Pokidex.css";

class Pokidex extends Component {
  static defaultProps = {
    pokemon: [
      { id: 4, name: "Charmander", type: "fire", base_experience: 62 },
      { id: 7, name: "Squirtle", type: "water", base_experience: 63 },
      { id: 11, name: "Metapod", type: "bug", base_experience: 72 },
      { id: 12, name: "Butterfree", type: "flying", base_experience: 178 },
      { id: 25, name: "Pikachu", type: "electric", base_experience: 112 },
      { id: 39, name: "Jigglypuff", type: "normal", base_experience: 95 },
      { id: 94, name: "Gengar", type: "poison", base_experience: 225 },
      { id: 133, name: "Eevee", type: "normal", base_experience: 65 },
    ],
  };
  render() {
    let title;
    if (this.props.isWinner) {
      title = <h1>WInning Hand</h1>;
    } else {
      title = <h1>Looging Hand</h1>;
    }
    return (
      <div className="Pokedex">
        <h1>POKIDEX!! </h1>
        <p>Total Experience : {this.props.exp}</p>
        <p
          className={this.props.isWinner ? "Pokedex-winner" : "Pokedex-looser"}
        >
          {this.props.isWinner ? "winner" : "LOOSER"}
        </p>
        <div className="Pokedex-card">
          {this.props.pokemon.map((el) => {
            return (
              <Pokecard
                id={el.id}
                name={el.name}
                type={el.type}
                exp={el.base_experience}
              />
            );
          })}
        </div>
      </div>
    );
  }
}

export default Pokidex;
