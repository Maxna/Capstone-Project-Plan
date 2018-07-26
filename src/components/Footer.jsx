import React from 'react';
import { Link } from 'react-router-dom';
import NewFeedback from './NewFeedback';
import PropTypes from 'prop-types';

function Footer(props){

  const text = {
    textDecoration: 'none',
  };
  const block = {
  };
  const log = {
    display: 'flex',
    fontFamily: 'sans-serif',
    marginLeft: '10px',
    height: '200px',
  };
  const sample = {

  };
  return (
    <div>
      <style jsx>{`
  .footerMain {
    position: absolute;
    left: 0;
    bottom: 0;
    right: 0;
    padding: 1rem;
    color: white;
    background-color: #1a1a1a;
    align-items: center;
    justify-content: center;
  }
  .post {
    background-color: palegreen;
    color: black;
    border-radius: 5px;
    padding: 5px 15px;
    border: none;
    text-decoration: none;
    font-size: 14px;
  }
`}</style>
      <div style={block} />
      <div className='footerMain'>
        <div>
          <h2>Feedback</h2>
        </div>
      <div className='post'>
        <Link to='newfeedbackform' style={text}>Submit</Link>
      </div>
    <div style={log}>
      <div style={sample}>
        <NewFeedback
          ticket="Not Enough Golf!"
          tip="If you could include a section about golf that would be awesome!"/>
      </div>
      <div style={sample}>
        <NewFeedback
          ticket="Help"
          tip="I am going to a boxing match, but I don't know anything about boxing!"/>
      </div>
      <div>
        {props.feedbackList.map((feedback) =>
          <NewFeedback ticket={feedback.ticket}
            tip={feedback.tip}
            key={feedback.id}/>
        )}
      </div>
    </div>
    </div>
    </div>
  );
}

Footer.propTypes={
feedbackList: PropTypes.array
};

export default Footer;
