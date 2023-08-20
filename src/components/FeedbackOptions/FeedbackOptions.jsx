import React from 'react';
import { ButtonSection, Button } from './feedbackOptions-style';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <ButtonSection>
      {options.map(option => (
        <Button
          key={option}
          option={option}
          onClick={() => onLeaveFeedback(option)}
        >
          {option}
        </Button>
      ))}
    </ButtonSection>
  );
};
