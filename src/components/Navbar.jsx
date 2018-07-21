import React from 'react';
import { Link } from 'react-router-dom';
import baseball from '../assets/images/baseball.svg';

function Navbar(){
const link = {
textDecoration: 'none',
}
  return (
<div>
<style jsx>{`
.navbar {
text-align: center;
  font-family: sans-serif;
  padding: 0 25px;
  min-width: 625px;
  color: #333;
}
.navTabGroup {
  display: flex;
justify-content: space-evenly;
width: 50%;
margin: auto;
  list-style: none;
  padding: 10px;
}
.navTab {
  border: 2px solid #2795dc;
  border-radius: 20px;
  padding: 10px 20px;
  margin-left: -1px;
  background-color: lightgreen;

}
`}</style>
    <div className='navbar'>
      <ul className='navTabGroup'>
        <li className='navTab'>
          <Link style={link} to='/detailFootball'>Football</Link>
        </li>
        <li className='navTab'>
          <Link style={link} to='/detailBaseball'>
            <img src={baseball} alt='baseballIcon' />
          </Link>
        </li>
        <li className='navTab'>
          <Link style={link} to='/detailBasketball'>Basketball</Link>
        </li>
        <li className='navTab'>
          <Link style={link} to='/detailHockey'>Hockey</Link>
        </li>
        <li className='navTab'>
          <Link style={link} to='/detailSoccer'>Soccer</Link>
        </li>
        <li className='navTab'>
          <Link style={link} to='/detailTennis'>Tennis</Link>
        </li>
      </ul>
    </div>
</div>
  );
}

export default Navbar;
