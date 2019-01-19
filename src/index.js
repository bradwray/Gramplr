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
    <div className="App">
      <CardWrapper style={{ top: "10%" }}>
        {pairs.map(item => {
          return Math.random() > 0.5 ? (
            <div>
              <Card style={{ height: "25vh" }}>item.right</Card>
              <BottomCard style={{ height: "25vh" }}>item.wrong</BottomCard>
            </div>
          ) : (
            <div>
              <Card style={{ height: "25vh" }}>item.wrong</Card>
              <BottomCard style={{ height: "25vh" }}>item.right</BottomCard>
            </div>
          );
        })}
      </CardWrapper>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
