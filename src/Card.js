import React, { Component } from "react";
import Hammer from "react-hammerjs";

export default class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {
      classList: ["top_card_container"]
    };
  }

  componentDidMount() {}

  onPanTop(event) {
    if (event.deltaX < 0 || event.deltaX > 0) {
      var xMulti = event.deltaX * 0.03;
      var yMulti = event.deltaY / 80;
      var rotate = xMulti * yMulti;
      event.target.style.transform =
        "translate(" +
        event.deltaX +
        "px, " +
        event.deltaY +
        "px) rotate(" +
        rotate +
        "deg)";
    }
  }

  onPanTopEnd(event) {
    var moveOutWidth = document.body.clientWidth;
    var keep = Math.abs(event.deltaX) < 300;
    event.target.classList.toggle("top_removed", !keep);
    if (keep) {
      //console.log("keep");
      event.target.style.transform = "";
    } else {
      //console.log("gone");
      var endX = Math.max(
        Math.abs(event.velocityX) * moveOutWidth,
        moveOutWidth
      );
      var toX = event.deltaX > 0 ? endX : -endX;
      var endY = Math.abs(event.velocityY) * moveOutWidth;
      var toY = 100;
      var xMulti = event.deltaX * 0.03;
      var yMulti = event.deltaY / 80;
      var rotate = xMulti * yMulti;
      event.target.style.transform =
        "translate(" +
        toX +
        "px, " +
        (toY + event.deltaY) +
        "px) rotate(" +
        rotate +
        "deg)";
      // DO SWIPE ACTIONS
      //this.props.superOnSwipe();
      if (toX < 0) {
        this.props.onSwipeLeft();
      } else if (this.props.onSwipeRight) {
        this.props.onSwipeRight();
      }
    }
  }

  onDoubleTap() {
    if (this.props.onDoubleTap) this.props.onDoubleTap(this.props.data);
  }

  render() {
    return (
      <Hammer
        key="top"
        onPan={this.onPanTop.bind(this)}
        onPanEnd={this.onPanTopEnd.bind(this)}
        onDoubleTap={this.onDoubleTap.bind(this)}
      >
        <div className={this.state.classList.join(" ")}>
          {this.props.children}
        </div>
      </Hammer>
    );
  }
}
