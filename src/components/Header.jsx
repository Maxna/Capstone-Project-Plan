import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import tuscan from '../assets/images/Tuscan.svg';
import menu from '../assets/images/burgerMenu.svg';

function Header(){
  const main = {
    backgroundColor: 'skyblue',
  };
  return (
    <div style={main}>
      <style jsx>{`
.header {
  font-family: sans-serif;
  margin-bottom: 15px;
}
.headerItemGroup {
  display: flex;
  justify-content: space-between;
  list-style: none;
  padding: 8px;
}
.headerItem {
  padding: 10px 15px;
  cursor: pointer;
  background-color: beige;
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
      <Navbar/>
    </div>
  );
}

export default Header;
