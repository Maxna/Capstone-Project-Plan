import React from 'react';

function Bio(){
  const bio = {
    border: '2px solid #ccc',
    padding: '15px',
    fontFamily: 'sans-serif'
  };

  const bioInfo = {
    color: 'gray'
  };

  return (
    <div style={bio}>
      <h2>Bio</h2>
      <p style={bioInfo}>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
    </div>
  );
}

export default Bio;
