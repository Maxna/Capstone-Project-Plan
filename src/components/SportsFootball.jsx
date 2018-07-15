import React from 'react';
import { Link } from 'react-router-dom';

function SportsFootball(){
  const sportsFootball = {
    backgroundColor: '#2d96de',
    padding: '10px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  };

  const post = {
    backgroundColor: '#dc0d6a',
    color: 'white',
    borderRadius: '5px',
    padding: '5px 15px',
    border: 'none',
    textDecoration: 'none',
    fontSize: '14px',
  };

  const buttons = {
    display: 'flex',
    justifyContent: 'space-between'
  };

  return (
    <div style={sportsFootball}>
<div>
<h2>If I knew more about Football, I would make that information accesible here!</h2>
</div>
        <div style={buttons}>
          <Link to="/" style={post}>Less Info!</Link>
        </div>
    </div>
  );
}

export default SportsFootball;