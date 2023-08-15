import { Component } from 'react';
import { Statistics } from './Statistics/statistics';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onLeaveFeedback = type => {
    this.setState(prevState => ({
      ...prevState,
      [type]: prevState[type] + 1,
    }));
  };

  render() {
    const { good, neutral, bad } = this.state;
    const countTotalFeedback = good + neutral + bad;
    const countGoodFeedback = good;
    const countPositiveFeedbackPercentage =
      (countGoodFeedback / countTotalFeedback) * 100 || 0;
    return (
      <div>
        <h1>Please leave feedback</h1>
        <FeedbackOptions
          options={['good', 'neutral', 'bad']}
          onLeaveFeedback={this.onLeaveFeedback}
        />
        <h2>Statistics</h2>
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={countTotalFeedback}
          positive={countPositiveFeedbackPercentage}
        />
      </div>
    );
  }
}
