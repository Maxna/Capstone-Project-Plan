import React from 'react';
import PropTypes from 'prop-types';

function FeedbackConditions(props){
  return (
    <div>
      <button onClick={props.onFeedbackFormConfirmation}>Comment</button>
    </div>
  );
}

FeedbackConditions.propTypes = {
  onFeedbackFormConfirmation: PropTypes.func
};

export default FeedbackConditions;
