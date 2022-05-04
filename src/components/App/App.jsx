import { FeedbackOptions } from "components/App/FeedbackOptions/FeedbackOptions";
import { Statistics } from "components/App/Statistics/Statistics";
import { Section } from "components/App/Section/Section";
import { Notification } from "components/App/Notification/Notification";

import { Container } from "./App.styled";
import React, { useState } from "react";

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const onButtonClick = (e) => {
    switch (e.currentTarget.name) {
      case "good":
        setGood((prev) => prev + 1);
        break;
      case "neutral":
        setNeutral((prev) => prev + 1);
        break;
      case "bad":
        setBad((prev) => prev + 1);
        break;
      default:
        return;
    }
  };

  return (
    <Container>
      <Section title="Please leave feedback">
        <FeedbackOptions
          onGoodClick={onButtonClick}
          onNeutralClick={onButtonClick}
          onBadClick={onButtonClick}
        />
      </Section>

      <Section title="Statistics">
        {good + neutral + bad > 0 ? (
          <Statistics good={good} neutral={neutral} bad={bad} />
        ) : (
          <Notification message="There is no feedback" />
        )}
      </Section>
    </Container>
  );
};
