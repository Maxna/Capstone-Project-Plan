import React from 'react';
import { Link } from 'react-router-dom';
import tuscan from '../assets/images/Tuscan.svg';

function SportsBaseball(){
  return (
<div>
<style jsx>{`
  .sportsBaseball {
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
img {
height: 100px;
width: 80px;
}
`}</style>
    <div className='sportsBaseball'>
          <img src={tuscan} alt='tuscanLogo' />
<div>
<h2>If I knew more about Baseball, I would put that information here!</h2>
</div>
    </div>
</div>
  );
}

export default SportsBaseball;
