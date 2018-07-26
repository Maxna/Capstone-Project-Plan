import React from 'react';
import PropTypes from 'prop-types';

function NewFeedback(props){
  const logBox = {
    padding: '25px',
    border: '1px solid #ccc',
    height: '120px',
    marginLeft: '10px',
    marginTop: '10px',
  };

  const p = {
    borderBottom: '50px',
  };

  return (
    <div style={logBox}>
      <h3 style={p}>{props.ticket}</h3>
      <div>
        <p>{props.tip}</p>
      </div>
    </div>
  );
}

NewFeedback.propTypes = {
  ticket: PropTypes.string,
  tip: PropTypes.string
};

export default NewFeedback;
