import React from 'react';
import { Link } from 'react-router-dom';
import FeedbackLog from './FeedbackLog';
import tuscan from '../assets/images/Tuscan.svg';

function Footer(){
  const text = {
    textDecoration: 'none',
    textAlign: 'center',
  };
  const block = {
    display: 'flex',
    justifyContent: 'center',
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
    width: 80px;
    display: flex;
    justify-content: center;
    margin-left: 20px;
  }
  h2 {
    text-align: center;
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
        <FeedbackLog />
      </div>
    </div>
  );
}

export default Footer;
