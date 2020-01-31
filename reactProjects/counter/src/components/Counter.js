import React from 'react';

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
    }
    
    this.handleClick = () => {
      this.setState(({counter}) => ({
        counter: counter + 1
      }));
    }
  }

  render() {
    return (
      <div>
        <h1>Counter Value: {`${this.state.counter}`}</h1>
        <button onClick={this.handleClick}>Click Me!</button>
      </div>
    );
  }
};

export default Counter;