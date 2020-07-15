import React, { Component } from "react";
import axios from "axios";
import "./JokeList.css";
import Joke from "./Joke";
import { v4 as uuidv4 } from "uuid";
import Laugh from "./img/laugh.svg";

export default class JokeList extends Component {
  static defaultProps = {
    numJokesToGet: 10,
  };

  constructor(props) {
    super(props);
    this.state = {
      jokes: JSON.parse(window.localStorage.getItem("jokes") || "[]"),
      loading: false,
    };
    this.seenJokes = new Set(this.state.jokes.map((joke) => joke.joke));
    this.handleVotes = this.handleVotes.bind(this);
    this.getJokes = this.getJokes.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleVotes(id, delta) {
    this.setState(
      (st) => ({
        jokes: st.jokes.map((j) =>
          j.id === id ? { ...j, votes: j.votes + delta } : j
        ),
      }),
      () => {
        window.localStorage.setItem("jokes", JSON.stringify(this.state.jokes));
      }
    );
  }

  handleClick() {
    this.setState({ loading: true }, this.getJokes);
  }
  componentDidMount() {
    if (this.state.jokes.length === 0) {
      this.setState({
        loading: true,
      });
      this.getJokes();
    }
  }

  async getJokes() {
    let jokes = [];
    while (jokes.length < this.props.numJokesToGet) {
      const joke = await axios.get("https://icanhazdadjoke.com/", {
        headers: {
          Accept: "application/json",
        },
      });
      if (!this.seenJokes.has(joke.data.joke)) {
        jokes.push({
          joke: joke.data.joke,
          votes: 0,
          id: uuidv4(),
        });
      } else {
        console.log("FOund Duplicate");
        console.log(joke.data.joke);
      }
    }
    this.setState(
      (st) => ({
        jokes: [...st.jokes, ...jokes],
        loading: false,
      }),
      () => {
        window.localStorage.setItem("jokes", JSON.stringify(this.state.jokes));
      }
    );
  }

  render() {
    if (this.state.loading) {
      return (
        <div className="JokeList-spinner">
          <i className="far fa-8x fa-laugh fa-spin" />
          <h1 className="JokeList-title">Loading...</h1>
        </div>
      );
    }
    let jokess = this.state.jokes.sort((a, b) => b.votes - a.votes);
    return (
      <div className="jokeList">
        <div className="jokeList-sidebar">
          <h1 className="jokeList-title">
            <span>Dad</span> jokes
          </h1>
          <img src={Laugh} alt="" />
          <button className="JokeList-getmore" onClick={this.handleClick}>
            New Joke
          </button>
        </div>

        <div className="jokeList-joke">
          {jokess.map((j) => (
            <Joke
              joke={j.joke}
              votes={j.votes}
              handleVotes={this.handleVotes}
              key={j.id}
              id={j.id}
            />
          ))}
        </div>
      </div>
    );
  }
}
