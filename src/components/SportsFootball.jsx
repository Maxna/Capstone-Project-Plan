import React from 'react';
import { Link } from 'react-router-dom';
import "./SportsFootball.css";

function SportsFootball(){
  const sportsFootball = {
    backgroundColor: '#2d96de',
    padding: '10px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
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
    <div className='tuscan' style={sportsFootball}>
<div>
<h2>If I knew more about Football, I would put that information here!</h2>
</div>
        <div style={buttons}>
          <Link to="/" style={post}>Done!</Link><br />
          <img src={Tuscan} alt='tuscanLogo' />
        </div>
    </div>
  );
}

export default SportsFootball;