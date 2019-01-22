import React, { Component } from "react";
import "./cards.css";

class CardWrapper extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.setupCards();
  }

  componentDidUpdate() {
    this.setupCards();
  }

  setupCards() {
    var container = document.querySelector(".container");
    var allCards = document.querySelectorAll(
      ".top_card_container .bottom_card_container"
    );
    var topCards = document.querySelectorAll(
      ".top_card_container:not(.top_removed)"
    );
    var bottomCards = document.querySelectorAll(
      ".bottom_card_container:not(.bottom_removed)"
    );

    topCards.forEach(function(card, index) {
      card.style.zIndex = allCards.length - index;
      card.style.transform =
        "scale(" + (20 - index) / 20 + ") translateY(-" + 20 * index + "px)";
      card.style.opacity = (10 - index) / 10;
    });
    bottomCards.forEach(function(card, index) {
      card.style.zIndex = allCards.length - index;
      card.style.transform =
        "scale(" + (20 - index) / 20 + ") translateY(-" + 20 * index + "px)";
      card.style.opacity = (10 - index) / 10;
    });

    container.classList.add("loaded");
  }

  renderCards() {
    return React.Children.map(this.props.children, child => {
      return React.cloneElement(child, {
        superOnSwipe: this.superOnSwipe.bind(this)
      });
    });
  }

  renderEndCard() {
    if (this.props.addEndCard) {
      return (
        <div className="card_container end_card">{this.props.addEndCard()}</div>
      );
    }
  }

  superOnSwipe() {
    this.setupCards();
  }

  render() {
    return (
      <div className="container">
        <div className="cards_container">
          {this.renderCards()}
          {this.renderEndCard()}
        </div>
      </div>
    );
  }
}

export default CardWrapper;
