import { Component } from 'react';
import { Statistics } from './Statistics/statistics';

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
    const { good, neutral, bad } = this.state;
    const countTotalFeedback = good + neutral + bad;
    const countGoodFeedback = good
    const countPositiveFeedbackPercentage = (countGoodFeedback / countTotalFeedback) * 100 || 0;
    return (
      <div>
        <h1>Please leave feedback</h1>

        <div>
          <button onClick={() => this.handleX('good')}>Good</button>
          <button onClick={() => this.handleX('neutral')}>Neutral</button>
          <button onClick={() => this.handleX('bad')}>Bad</button>
        </div>
        <h2>Statistics</h2>
        <Statistics good={good} neutral={neutral} bad={bad} total={countTotalFeedback} positive={countPositiveFeedbackPercentage}/>
      </div>
    );
  }
}
