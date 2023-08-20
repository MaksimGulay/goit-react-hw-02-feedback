import React from 'react';
import { StatisticsSection } from './statistica-style';

export const Statistics = ({ good, neutral, bad, total, positive }) => {
  return (
    <StatisticsSection>
      <p>Good:{good}</p>
      <p>Neutral:{neutral}</p>
      <p>Bad:{bad}</p>
      <p>Total{total}</p>
      <p>Positive feedback:{positive.toFixed(0)}%</p>
    </StatisticsSection>
  );
};
