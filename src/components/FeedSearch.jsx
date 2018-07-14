import React from 'react';
import { Link } from 'react-router-dom';


function FeedSearch(){
  const feedSearch = {
    backgroundColor: '#2d96de',
    padding: '10px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  };

  const button = {
    backgroundColor: '#dc0d6a',
    color: 'white',
    borderRadius: '5px',
    padding: '5px 15px',
    marginLeft: '20px',
    border: 'none',
    textDecoration: 'none',
    fontSize: '14px'
  };

  const input = {
    width: '50%',
    borderRadius: '5px',
    padding: '5px 15px',
    border: 'none'
  };

  return (
    <div style={feedSearch}>
      <input style={input} placeholder="What's happening?"></input>
      <Link to="/newfeedpost" style={button}>Post!</Link>
    </div>
  );
}

export default FeedSearch;
