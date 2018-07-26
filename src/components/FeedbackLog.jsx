import React from 'react';
import NewFeedback from './NewFeedback';

function FeedbackLog(){
  const log = {
    display: 'grid',
    fontFamily: 'sans-serif',
    marginLeft: '10px',
    height: '200px',
    gridTemplateColumns: '1fr 1fr 1fr',
  };
  const feedLog = {
    maxWidth: '300px',
  };

  return (
    <div style={log}>
      <NewFeedback
        ticket="More Golf"
        tip="I wish this app had golf instructions"/>
      <NewFeedback
        ticket="Help"
        tip="I am going to a boxing match and I don't know anything about boxing!"/>
      <NewFeedback
        ticket="cool app"
        tip="I liked the section on baseball"/>
    </div>
  );
}

export default FeedbackLog;
