import React from 'react';
import PropTypes from 'prop-types';
import FeedbackOptions from './FeedbackOptions';
import Statistics from './Statistics';
import Section from './Section';
import Notification from './Notification';

export class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      good: 0,
      neutral: 0,
      bad: 0,
    };
  }

  countTotalFeedback() {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  }

  countPositiveFeedbackPercentage() {
    const { good } = this.state;
    const total = this.countTotalFeedback();
    if (total === 0) {
      return 0;
    }
    return Math.round((good * 100) / total);
  }

  onLeaveFeedback(reviewPoint) {
    this.setState(prevState => {
      const pointValue = prevState[reviewPoint] + 1;
      return { ...prevState, [reviewPoint]: pointValue };
    });
  }

  hasFeedback() {
    const totalFeedback = this.countTotalFeedback();
    return totalFeedback > 0;
  }

  renderStatistics() {
    const { good, neutral, bad } = this.state;
    const total = this.countTotalFeedback();
    const positivePercentage = this.countPositiveFeedbackPercentage();

    if (total === 0) {
      return <Notification message="There is no feedback" />;
    }

    return (
      <Statistics
        good={good}
        neutral={neutral}
        bad={bad}
        total={total}
        positivePercentage={positivePercentage}
      />
    );
  }

  render() {
    const options = ['good', 'neutral', 'bad'];

    return (
      <div
        style={{
          height: '100vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 36,
          color: '#010101',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <div
            style={{
              width: '100%',
              padding: 20,
              backgroundColor: '#202123',
              color: '#FFFFFF',
            }}
          >
            <Section title="Reviews Widget">
              <FeedbackOptions
                options={options}
                onLeaveFeedback={this.onLeaveFeedback.bind(this)}
              />
            </Section>
          </div>
          <div
            style={{
              width: '100%',
              padding: 20,
              backgroundColor: '#343541',
              color: '#FFFFFF',
            }}
          >
            <Section title="Statistics">
              {this.renderStatistics()}
            </Section>
          </div>
        </div>
      </div>
    );
  }
}

App.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string),
};