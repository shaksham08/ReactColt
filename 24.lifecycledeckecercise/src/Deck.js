import React, { Component } from "react";
import Card from "./Card.js";
import "./Card.css";
import axios from "axios";
const API_URL = "https://deckofcardsapi.com/api/deck/new/shuffle/";

export default class Deck extends Component {
  constructor(props) {
    super(props);
    this.state = {
      deck: null,
      drawn: [],
    };
    this.getCard = this.getCard.bind(this);
  }
  async componentDidMount() {
    const deck = await axios.get(API_URL);
    this.setState({
      deck: deck.data,
    });
  }

  async getCard() {
    //make request using id
    try {
      const cardRes = await axios.get(
        `https://deckofcardsapi.com/api/deck/${this.state.deck.deck_id}/draw/`
      );
      if (!cardRes.data.success) {
        throw new Error("No Card remaining");
      }

      let card = cardRes.data.cards[0];
      console.log(card);
      this.setState((st) => {
        return {
          drawn: [
            ...st.drawn,
            {
              id: card.code,
              image: card.image,
              name: `${card.value} of ${card.suit}`,
            },
          ],
        };
      });
    } catch (err) {
      alert(err);
    }
  }
  render() {
    const cards = this.state.drawn.map((c) => (
      <Card name={c.name} image={c.image} key={c.id} />
    ));
    return (
      <div>
        <h1>Card Dealer</h1>
        <button onClick={this.getCard}>Click</button>
        <div className="deck-cardarea">{cards}</div>
      </div>
    );
  }
}
