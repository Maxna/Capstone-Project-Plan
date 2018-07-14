import React from 'react';
import PropTypes from 'prop-types';

function FeedPost(props){
  const friend = {
    display: 'flex',
    alignItems: 'flex-start',
    padding: '25px',
    borderBottom: '1px solid #ccc'
  };

  const friendImg = {
    height: '50px',
    width: '50px',
    minWidth: '50px',
    borderRadius: '100%',
    backgroundColor: '#ccc',
    marginRight: '20px'
  };

  const h3 = {
    margin: '0 0',
    color: '#333',
    fontSize: '16px'
  };

  const p = {
    margin: '5px 0 5px'
  };

  return (
    <div style={friend}>
      <div style={friendImg} className="img"></div>
      <div>
        <h3 style={h3}>{props.title}</h3>
        <p style={p}>{props.msg}</p>
      </div>
    </div>
  );
}

FeedPost.propTypes = {
  title: PropTypes.string,
  msg: PropTypes.string
};

export default FeedPost;
