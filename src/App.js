import React, { Component } from "react";
// import logo from './logo.svg';
// import './App.css';
class Ticker extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
      tickerPause: false,
    };
  }
  // this is where our methods go
  componentDidMount() {
    //start our ticker here.
    setInterval(
      () =>
        this.setState({
          count: this.state.count + 1,
        }),
      1000
    );
  }
  shouldComponentUpdate(nextProps, nextState) {
    //only return true if the count is a multiple of 3
    if (nextState.count % 3 === 0) return true;
    else return false;
  }

  reset = () => {
    this.setState({
      count: 0,
    });
  };

  pause = () => {
    if (this.state.tickerPause) {
      this.setState({
        tickerPause: false,
      });
    } else {
      this.setState({
        tickerPause: true,
      });
    }
  };

  render() {
    return (
      <div>
        <p>The Ticker is: {this.state.count}</p>
        <button type="button" onClick={this.reset}>
          Reset Ticker
        </button>
        <button type="button" onClick={this.pause}>
          {this.state.tickerPause ? "Ticker is Paused" : "Pause the Ticker"}
        </button>
      </div>
    );
  }
}

export default Ticker;
