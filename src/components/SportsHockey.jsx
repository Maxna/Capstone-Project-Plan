import React from 'react';
import { Link } from 'react-router-dom';
import tuscan from '../assets/images/Tuscan.svg';

function SportsHockey(){
  return (
<div>
<style jsx>{`
  .sportsHockey {
    background-color: #2d96de;
    padding: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .buttons {
    display: flex;
    justify-content: space-between;
  }
  .post {
    background-color: #dc0d6a;
    color: white;
    border-radius: 5px;
    padding: 5px 15px;
    border: none;
    text-decoration: none;
    font-size: 14px;
  }
`}</style>
    <div className='sportsHockey'>
<div>
<h2>If I knew more about Hockey, I would put that information here!</h2>
</div>
          <img src={tuscan} alt='tuscanLogo' />
    </div>
</div>
  );
}

export default SportsHockey;
