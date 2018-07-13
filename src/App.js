import React, { Component } from 'react';

import Payment from './adapters/payment';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    const payment = new Payment();

    payment.create();
    payment.pay();
  }

  render() {
    return (
      <button type="button" onClick={this.handleClick}>Pay</button>
    );
  }
}

export default App;
