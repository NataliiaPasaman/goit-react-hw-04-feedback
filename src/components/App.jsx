import { useState } from 'react';

import { useFeedback } from '../hooks/useFeedback';

import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Statistics } from './Statistics/Statistics';
import { Notification } from 'components/Notification/Notification';
import { Section } from './Section/Section';

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  // ПРИ НАПИСАННІ КАСТОМНОГО ХУКА
  // const onLeaveFeedbackGoodNew = useFeedback(good, setGood);
  // const onLeaveFeedbackNeutralNew = useFeedback(neutral, setNeutral);
  // const onLeaveFeedbackBadNew = useFeedback(bad, setBad);

  const onLeaveFeedbackGood = event => {
    setGood(good + 1);
  };

  const onLeaveFeedbackNeutral = event => {
    setNeutral(neutral + 1);
  };

  const onLeaveFeedbackBad = event => {
    setBad(bad + 1);
  };

  const countTotalFeedback = () => {
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = () => {
    const total = countTotalFeedback();
    const positivePercentage = Number(((good * 100) / total).toFixed());
    return positivePercentage;
  };

  const options={ good, neutral, bad, };
    return (
      <div
        style={{
          padding: '25px',
          fontSize: 40,
          color: '#010101',
        }}
      >
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={options}
            onLeaveFeedbackGood={onLeaveFeedbackGood}
            onLeaveFeedbackNeutral={onLeaveFeedbackNeutral}
            onLeaveFeedbackBad={onLeaveFeedbackBad}
          />
        </Section>

        <Section title="Statistics">
          {countTotalFeedback() !== 0 ? (
            <Statistics
              options={options}
              totalFeedback={countTotalFeedback}
              positivePercentage={countPositiveFeedbackPercentage}
            />
          ) : (
            <Notification message="There is no feedback" />
          )}
        </Section>
      </div>
    );

}


