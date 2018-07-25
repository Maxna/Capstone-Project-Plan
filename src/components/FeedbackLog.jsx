import React from 'react';
import NewFeedback from './NewFeedback';

function FeedbackLog(){
  const log = {
    display: 'flex',
    fontFamily: 'sans-serif',
    marginLeft: '10px',
    height: '200px',
  };
  const feedLog = {
    height: '50px',
  };

  return (
    <div style={log}>
      <NewFeedback
        ticket="React @Epicodus"
        tip="Looking forward to school today!"/>
      <NewFeedback
        ticket="Don't Drink and Code"
        tip="Oh no! My code is a mess!"/>
      <NewFeedback
        ticket="Farewell Avanti"
        tip="I'm gonna miss the frozen treats!"/>
    </div>
  );
}

export default FeedbackLog;
