import React, { Component } from 'react';

class LifecycleExample extends Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
    console.log('Constructor');
  }

  componentDidMount() {
    console.log('Component Did Mount');
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('Component Did Update');
  }

  componentWillUnmount() {
    console.log('Component Will Unmount');
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('Should Component Update');
    return true;
  }

  render() {
    console.log('Render');
    return (
      <div>
        <p>Count: {this.state.count}</p>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>Increment</button>
      </div>
    );
  }
}

export default LifecycleExample;
