import React from 'react';
import PropTypes from 'prop-types';

function Friend(props){
  const friend = {
    display: 'flex',
    alignItems: 'flex-start',
    marginBottom: '20px'
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
    margin: '0 0 5px',
    color: '#333',
    fontWeight: 'normal',
    fontSize: '16px'
  };

  const button = {
    // backgroundColor: '#2d96de',
    color: 'white',
    borderRadius: '0',
    padding: '5px 15px'
  };

  return (
    <div style={friend}>
      <style jsx>{`
        .color-toggle {
          background-color: #2d96de;
        }
        .color-toggle:hover {
          background-color: red;
        }
      `}</style>
      <div style={friendImg} className="img">{props.img}</div>
      <div>
        <h3 style={h3}>{props.name}</h3>
        <button className="color-toggle" style={button}>Message</button>
      </div>
    </div>
  );
}

Friend.propTypes = {
  name: PropTypes.string,
  img: PropTypes.url
};

export default Friend;
