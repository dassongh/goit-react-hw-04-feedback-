import { useState } from 'react';
import Section from './components/Section';
import Statistics from './components/Statistics';
import FeedbackOptions from './components/FeedbackOptions';
import Notification from './components/Notifications';

function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const btnHandler = e => {
    switch (e.target.innerText) {
      case 'good':
        setGood(s => s + 1);
        break;
      case 'neutral':
        setNeutral(s => s + 1);
        break;
      case 'bad':
        setBad(s => s + 1);
        break;
      default:
        return;
    }
  };

  const countTotalFeedbacks = () => good + neutral + bad;
  const countPositivePercentage = total => ((good / total) * 100).toFixed();

  const btns = ['good', 'neutral', 'bad'];
  const total = countTotalFeedbacks();
  const positivePercentage = countPositivePercentage(total);

  return (
    <Section title="Please leave your feedback">
      <FeedbackOptions options={btns} onLeaveFeedback={btnHandler} />

      {total ? (
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          totalFeedbacks={total}
          positivePercentage={positivePercentage}
        />
      ) : (
        <Notification title="There is no feedback" />
      )}
    </Section>
  );
}

export default App;
