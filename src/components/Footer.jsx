import React from 'react';
import { Link } from 'react-router-dom';
import FeedbackLog from './FeedbackLog';
import tuscan from '../assets/images/Tuscan.svg';

function Footer(){
  const text = {
    textDecoration: 'none',
  }
  return (
    <div>
      <style jsx>{`
  .footerMain {
    position: relative;
    left: 0;
    bottom: 0;
    width: 100%;
    color: white;
    background-color: #1a1a1a;
    padding: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .post {
    background-color: palegreen;
    color: white;
    border-radius: 5px;
    padding: 5px 15px;
    border: none;
    text-decoration: none;
    font-size: 14px;
  }
  img {
    height: 100px;
    width: 80px;
  }
`}</style>
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
