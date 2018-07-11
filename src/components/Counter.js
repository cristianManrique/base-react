import React, { Component } from 'react';

class Counter extends Component {
  state = {
    count: 0,
    type: 'Niet'
  };

  counter = (action) => {
    let count ='';
    let type = action;

    switch (action) {
      case 'INCREMENT':
        count = this.state.count + 1 ;
        break;
      case 'DECREMENT':
        count = this.state.count - 1 ;
        break;
      default:
        return count = 0;
    }
    return this.setState({
      count: count,
      type: type
    })
  };

  render() {
    return (
      <div className="home-wrapper">
        <h2>Counter</h2>
        <h3>{this.state.type}</h3>
        <p>{this.state.count}</p>
        <button className="btn-primary" onClick={() => this.counter('INCREMENT')}>+</button>
        <button className="btn-primary" onClick={() => this.counter('DECREMENT')}>-</button>

      </div>
      )
    }
  };
export default Counter;
