import React from "react";
import FeedbackOptions from "../FeedbackOptions/FeedbackOptions";
import Statistics from "../Statistics/Statistics";
import Section from "../Section/Section";
import Notification from "../Notification/Notification";

class Feedback extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  cliclOnGood = () => {
    this.setState((prevState) => ({ good: prevState.good + 1 }));
  };
  cliclOnNeutral = () => {
    this.setState((prevState) => ({ neutral: prevState.neutral + 1 }));
  };
  cliclOnBad = () => {
    this.setState((prevState) => ({ bad: prevState.bad + 1 }));
  };

  render() {
    const { good, neutral, bad } = this.state;
    const { cliclOnGood, cliclOnNeutral, cliclOnBad } = this;

    const countTotalFeedback = good + neutral + bad;
    const countPositiveFeedbackPercentage = (
      (good / (good + neutral + bad)) *
      100
    ).toFixed(0);

    return (
      <Section title="Please leave feedback">
        <FeedbackOptions
          cliclOnGood={cliclOnGood}
          cliclOnNeutral={cliclOnNeutral}
          cliclOnBad={cliclOnBad}
        />

        {countTotalFeedback !== 0 ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback}
            positive={countPositiveFeedbackPercentage}
          />
        ) : (
          <Notification message="No feedback given" />
        )}
      </Section>
    );
  }
}

export default Feedback;
