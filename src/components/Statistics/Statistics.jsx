import React from 'react';
import PropTypes from 'prop-types';
import css from 'components/Statistics/Statistics.module.css';


export const Statistics = ({
  good,
  neutral,
  bad,
  totalFeedback,
  positivePercentage,
}) => {
  const totalFeedbacks = totalFeedback();
  const goodPercentage = positivePercentage();

  return (
    <ul>
      <li className={css.statistics__item}>Good: {good}</li>
      <li className={css.statistics__item}>Neutral: {neutral}</li>
      <li className={css.statistics__item}>Bad: {bad}</li>
      <li className={css.statistics__item}>Total: {totalFeedbacks}</li>
      <li className={css.statistics__item}>
        Positive feedback: {goodPercentage || 0}%
      </li>
    </ul>
    );
};

Statistics.propypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  totalFeedback: PropTypes.func.isRequired,
  goodPercentage: PropTypes.func.isRequired,
};
