import React, { Component } from 'react';

import Payment from './adapters/payment';
import OrderSummary from './components/OrderSummary';

import './App.css';

class App extends Component {
  handleCheckout() {
    const payment = new Payment(500);
  
    payment.create();
    payment.pay();
  }
    
  render() {
    return (
      <OrderSummary onCheckout={()=>this.handleCheckout()}/>
    );
  }
}

export default App;
