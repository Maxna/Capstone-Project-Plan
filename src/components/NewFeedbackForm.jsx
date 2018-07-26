import React from 'react';
import { Link } from 'react-router-dom';


function NewFeedbackForm(){
  const newFeedback = {
    backgroundColor: '#2d96de',
    padding: '10px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  };

  const form = {
    // display: 'flex',
    // justifyContent: 'space-between',
    height: '90%',
    width: '90%',
    borderRadius: '5px',
    padding: '5px 15px',
    border: 'none'
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

  const nevermind = {
    backgroundColor: '#712dde',
    color: 'white',
    borderRadius: '5px',
    padding: '5px 15px',
    border: 'none',
    textDecoration: 'none',
    fontSize: '14px'
  };

  const input = {
    height: '80%',
    width: '90%',
    borderRadius: '5px',
    padding: '5px 15px',
    border: 'none',
    fontSize: '24px',
    textAlign: 'center',
    width: '1330px',
  };

  const buttons = {
    display: 'flex',
    justifyContent: 'space-between'
  };

  return (
    <div style={newFeedback}>
      <form style={form}>
        <div style={buttons}>
          <button style={post} type='submit'>Post!</button>
          <Link to="/" style={nevermind}>Nevermind!</Link>
        </div>
        <hr/>
        <input
          style={input}
          type='text'
          id='post'
          placeholder='Put your suggestions here.'/>
      </form>
    </div>
  );
}

export default NewFeedbackForm;
