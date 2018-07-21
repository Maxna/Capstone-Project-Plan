import React from 'react';
import { Link } from 'react-router-dom';
import tuscan from '../assets/images/Tuscan.svg';

function SportsBasketball(){
  return (
<div>
<style jsx>{`
  .sportsBasketball {
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
    <div className='sportsBasketball'>
<div>
<h2>If I knew more about Basketball, I would put that information here!</h2>
</div>
          <img src={tuscan} alt='tuscanLogo' />
    </div>
</div>
  );
}

export default SportsBasketball;
