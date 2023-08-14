// import { type } from '@testing-library/user-event/dist/type';
import { Component } from 'react';
// import { StateExample } from '../components/StateExample/StateExample';

// export const App = () => {
//   return (
//     <div>
//       <StateExample />
//     </div>
//   );
// };

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleX = type => {
    this.setState(prevState => {
      return {
        [type]: prevState[type] + 1,
      };
    });
  };

  render() {
    return (
      <div>
        <button onClick={() => this.handleX('good')}>
          {this.state.good}Good
        </button>
        <button onClick={() => this.handleX('bad')}>Bad</button>
        <button onClick={() => this.handleX('neutral')}>Neutral</button>
      </div>
    );
  }
}
