import React from "react";
import ReactDOM from "react-dom";
import Card from "./Card";
import BottomCard from "./BottomCard";
import CardWrapper from "./CardWrapper";

import "./cards.css";

function App() {
  const pairs = [
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
  ];

  return (
    <div>
      <CardWrapper>
        {pairs.map(item => {
          return Math.random() > 0.5 ? (
            <div>
              <Card>item.right</Card>
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

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
