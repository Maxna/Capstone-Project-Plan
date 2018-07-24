import React from 'react';
import { Link } from 'react-router-dom';
import tuscan from '../assets/images/Tuscan.svg';
import menu from '../assets/images/burgerMenu.svg';

function Header(){
  return (
    <div>
      <style jsx>{`
.header {
  align-items: center;
  font-family: sans-serif;
  padding: 0 5px;
  min-width: 625px;
  color: #333;
margin-bottom: 20px;
}
.headerItemGroup {
  display: flex;
  justify-content: space-between;
  list-style: none;
  padding: 5px;
}
.headerItem {
  padding: 10px 20px;
  margin-left: 20px;
  font-size: 14px;
}
img {
height: 32px;
width: 32px;
}
`}</style>
      <div className='header'>
        <div className='headerItemGroup'>
          <Link to='/' className='headerItem'>
            <button className='headerItem'>
              <img src={menu} alt='Menu' />
            </button>
          </Link>
          <Link to='/allSports' className='headerItem'>
            <button className='headerItem'>
              <img src={tuscan} alt='Home' />
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Header;
