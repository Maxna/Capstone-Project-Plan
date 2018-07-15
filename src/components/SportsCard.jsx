import React from 'react';
import PropTypes from 'prop-types';

function SportsCard(props){
  const sport = {
    display: 'flex',
    alignItems: 'flex-start',
    padding: '25px',
    border: '1px solid #ccc'

  };

  const sportImg = {
    height: '50px',
    width: '50px',
    minWidth: '50px',
    borderRadius: '100%',
    backgroundColor: '#ccc',
    marginRight: '20px'
  };

  const h4 = {
    margin: '0 0',
    color: '#333',
    fontSize: '16px'
  };

  const p = {
    margin: '5px 0 5px'
  };

  return (
    <div style={sport}>
      <div style={sportImg}></div>
      <div>
        <h3 style={h4}>{props.name}</h3>
        <p style={p}>{props.summary}</p>
      </div>
    </div>
  );
}

SportsCard.propTypes = {
  name: PropTypes.string,
  summary: PropTypes.string
};

export default SportsCard;
