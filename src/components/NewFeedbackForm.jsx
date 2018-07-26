import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { v4 } from 'uuid';


function NewFeedbackForm(props){
let _ticket=null;
let _tip=null;

function handleNewFeedbackFormSubmission(event){
event.preventDefault();
props.onNewFeedbackCreation({ticket: _ticket.value, tip: _tip.value, id: v4()});
_ticket.value = '';
_tip.value = '';
}

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
    textAlign: 'center'
  };

  const buttons = {
    display: 'flex',
    justifyContent: 'space-between'
  };

  return (
    <div className='newFeedBack'>
      <form onSubmit={handleNewFeedbackFormSubmission} style={form}>
        <input
          style={input}
          type='text'
          id='ticket'
          placeholder='Reason for ticket...'
          ref={(input) => {_ticket=input;}}/>
        <input
          style={input}
          type='text'
          id='tip'
          placeholder='What did we miss?'
          ref={(input) => {_tip=input;}}/>
        <button type='submit'>Leave Feedback</button>
      </form>
    </div>
  );
}

NewFeedbackForm.propTypes={
  onNewFeedbackCreation: PropTypes.func
};

export default NewFeedbackForm;
