import React from "react";
import PropTypes from 'prop-types';
import css from 'components/FeedbackOptions/FeedbackOptions.module.css';

export const FeedbackOptions = ({ 
  onLeaveFeedbackGood, 
  onLeaveFeedbackNeutral, 
  onLeaveFeedbackBad,
  options }) => {

    const { good, neutral, bad } = options;

  return (
    <div className={css.container__feedback}>
      <button
        type="button"
        className={css.btn__feedback}
        name={good}
        onClick={onLeaveFeedbackGood} >
        Good
      </button>

      <button
        type="button"
        className={css.btn__feedback}
        name={neutral}
        onClick={onLeaveFeedbackNeutral} >
        Neutral
      </button>

      <button
        type="button"
        className={css.btn__feedback}
        name={bad}
        onClick={onLeaveFeedbackBad} >
        Bad
      </button>

      {/* {options.map(option => {
        return (
          <button
            key={option}
            type="button"
            className={css.btn__feedback}
            name={option}
            onClick={onLeaveFeedbackGood} >
            {option}
          </button>
        );
      })} */}
    </div>
  );
};

// FeedbackOptions.propypes = {
//     feedback: PropTypes.shape({
//         good: PropTypes.number.isRequired,
//         neutral: PropTypes.number.isRequired,
//         bad: PropTypes.number.isRequired,
//     }),
//     onLeaveFeedback: PropTypes.func.isRequired,
// }