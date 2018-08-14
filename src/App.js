import React, { Component } from 'react';

import Payment from './adapters/payment';
import OrderSummary from './components/OrderSummary';
import PackageOption from './components/PackageOption';

import './App.css';

class App extends Component {
  constructor() {
    super()

    this.state = {
      packagePrice: 0
    }
  }

  handlePackageClick(price) {
    this.setState({
      packagePrice: price
    })
  }

  handleCheckout() {
    const payment = new Payment(this.state.packagePrice);
  
    payment.create();
    payment.pay();
  }
    
  render() {
    const prices = [1500, 2500, 3500, 8000]
    return (
      <div className="container">
        { prices.map((price) => (<PackageOption onClick={this.handlePackageClick.bind(this)} active={price === this.state.packagePrice} price={price} />)) }
        <OrderSummary price={this.state.packagePrice} onCheckout={()=>this.handleCheckout()}/>
      </div>
    );
  }
}

export default App;
