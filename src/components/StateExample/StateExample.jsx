import { Component } from 'react';
import { A } from './A';

const styles = {
  backgroundColor: 'orangered',
  padding: 12,
};
export class StateExample extends Component {
  state = {
    numberOfClicks: 0,
  };
  handleClick = () => {
    this.setState(prevState => {
      return {
        numberOfClicks: prevState.numberOfClicks + 1,
      };
    });
  };
  handleReser = () => {
    this.setState({
      numberOfClicks: 0,
    });
  };
  render() {
    return (
      <div style={styles}>
        StateExample
        <button onClick={this.handleClick}>{this.state.numberOfClicks}</button>
        <button onClick={this.handleReser}>Reset</button>
        <A
          clicks={this.state.numberOfClicks}
          onIncriment={this.handleClick}
          onReset={this.handleReser}
        />
      </div>
    );
  }
}
