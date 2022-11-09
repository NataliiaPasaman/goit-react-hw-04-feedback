import React from "react";
import PropTypes from 'prop-types';
import css from 'components/FeedbackOptions/FeedbackOptions.module.css';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <div className={css.container__feedback}>
      {options.map(option => {
        return (
          <button
            key={option}
            type="button"
            className={css.btn__feedback}
            name={option}
            onClick={onLeaveFeedback} >
            {option}
          </button>
        );
      })}
    </div>
  );
};

FeedbackOptions.propypes = {
    feedback: PropTypes.shape({
        good: PropTypes.number.isRequired,
        neutral: PropTypes.number.isRequired,
        bad: PropTypes.number.isRequired,
    }),
    onLeaveFeedback: PropTypes.func.isRequired,
}