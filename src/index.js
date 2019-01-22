import React from "react";
import ReactDOM from "react-dom";
import Card from "./Card";
import BottomCard from "./BottomCard";
import CardWrapper from "./CardWrapper";

import "./cards.css";

class App extends React.Component {
  state = {
    pairs: [
      {
        right: "this one is right",
        wrong: "this one is wrong"
      },
      {
        right: "this one is right",
        wrong: "this one is wrong"
      },
      {
        right: "this one is right",
        wrong: "this one is wrong"
      },
      {
        right: "this one is right",
        wrong: "this one is wrong"
      },
      {
        right: "this one is right",
        wrong: "this one is wrong"
      }
    ]
  };

  swipeRight = () => {
    console.log("right!");
  };
  swipeLeft = () => {
    console.log("left!");
  };

  render() {
    return (
      <div>
        <CardWrapper>
          {this.state.pairs.map(item => {
            return Math.random() > 0.5 ? (
              <div>
                <Card
                  onSwipeLeft={this.swipeLeft}
                  onSwipeRight={this.swipeRight}
                >
                  item.right
                </Card>
                <BottomCard>item.wrong</BottomCard>
              </div>
            ) : (
              <div>
                <Card>item.wrong</Card>
                <BottomCard>item.right</BottomCard>
              </div>
            );
          })}
        </CardWrapper>
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
