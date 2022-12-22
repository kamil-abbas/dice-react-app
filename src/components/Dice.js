import React, { Component } from "react";
import "./Dice.css";

export default class Dice extends Component {
  state = {
    num: 1,
  };

  handleClick = (e) => {
    let func = setInterval(() => {
      this.setState({ num: Math.floor(Math.random() * 6 + 1) });
      window.addEventListener("keydown", (event) => {
        if (event.key !== "") {
          clearInterval(func);
        }
      });
    }, 10);
  };

  render() {
    return (
      <div className="dice" onClick={this.handleClick}>
        <h1>{this.state.num}</h1>
      </div>
    );
  }
}
