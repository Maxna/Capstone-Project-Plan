import React from 'react';
import { Link } from 'react-router-dom';
import baseball from '../assets/images/baseball.svg';
import football from '../assets/images/football.svg';
import hockey from '../assets/images/hockey.svg';
import tennis from '../assets/images/tennis.svg';
import soccer from '../assets/images/soccer.svg';
import basketball from '../assets/images/basketball.svg';

function Navbar(){
  const link = {
    textDecoration: 'none',
  };
  return (
    <div>
      <style jsx>{`
.navbar {
  display: flex;
  justify-content: stretch;
}
.navTabGroup {
  display: flex;
  justify-content: center;
  margin: auto;
  list-style: none;
  padding: 10px;
}
.navTab {
  border: 2px solid lightgreen;
  border-radius: 20px;
  padding: 10px 20px;
  margin-left: -1px;
  height: 65%;
}
.navTab:hover {
  background-color: palegreen;
}
.navTab:active {
  background-color: lightgreen;
}
.imgHockey {
  margin-top: 8px;
}
.imgHelper {
  align-items: center;
  justify-content: center;
}
`}</style>
      <div className='navbar'>
        <ul className='navTabGroup'>
          <Link style={link} to='/detailFootball'>
            <li className='navTab'>
              <img src={football} className='imgHelper' alt='footballIcon' />
            </li>
          </Link>
          <Link style={link} to='/detailBaseball'>
            <li className='navTab'>
              <img src={baseball} className='imgHelper' alt='baseballIcon' />
            </li>
          </Link>
          <Link style={link} to='/detailBasketball'>
            <li className='navTab'>
              <img src={basketball} className='imgHelper' alt='basketballIcon' />
            </li>
          </Link>
          <Link style={link} to='/detailHockey'>
            <li className='navTab'>
              <img src={hockey} className='imgHockey' alt='hockeyIcon' />
            </li>
          </Link>
          <Link style={link} to='/detailSoccer'>
            <li className='navTab'>
              <img src={soccer} className='imgHelper' alt='soccerIcon' />
            </li>
          </Link>
          <Link style={link} to='/detailTennis'>
            <li className='navTab'>
              <img src={tennis} className='imgHelper' alt='tennisIcon' />
            </li>
          </Link>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
