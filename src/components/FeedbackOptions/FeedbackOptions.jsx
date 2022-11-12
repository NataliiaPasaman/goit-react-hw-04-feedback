import React from "react";
import PropTypes from 'prop-types';
import css from 'components/FeedbackOptions/FeedbackOptions.module.css';

export const FeedbackOptions = ({ 
  onLeaveFeedbackGood, 
  onLeaveFeedbackNeutral, 
  onLeaveFeedbackBad,
  options }) => {

    const keysOptions = Object.keys(options);

  return (
    <div className={css.container__feedback}>
      <button
        type="button"
        className={css.btn__feedback}
        name={keysOptions[0]}
        onClick={onLeaveFeedbackGood} >
          {keysOptions[0]}
      </button>

      <button
        type="button"
        className={css.btn__feedback}
        name={keysOptions[1]}
        onClick={onLeaveFeedbackNeutral} >
          {keysOptions[1]}
      </button>

      <button
        type="button"
        className={css.btn__feedback}
        name={keysOptions[2]}
        onClick={onLeaveFeedbackBad} >
          {keysOptions[2]}
      </button>

    </div>
  );
};

FeedbackOptions.propypes = {
    options: PropTypes.shape({
        good: PropTypes.number.isRequired,
        neutral: PropTypes.number.isRequired,
        bad: PropTypes.number.isRequired,
    }),
    onLeaveFeedbackGood: PropTypes.func.isRequired,
    onLeaveFeedbackNeutral: PropTypes.func.isRequired,
    onLeaveFeedbackBad: PropTypes.func.isRequired,
}