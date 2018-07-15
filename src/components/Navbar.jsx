import React from 'react';
import { Link } from 'react-router-dom';

function Navbar(){
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
}
`}</style>
    <div className='navbar'>
      <ul className='navTabGroup'>
        <li className='navTab'>
        <Link to='/sportsinfo'>Football</Link>
        </li>
        <li className='navTab'>Basketball</li>
        <li className='navTab'>Baseball</li>
        <li className='navTab'>Hockey</li>
        <li className='navTab'>Soccer</li>
        <li className='navTab'>Tennis</li>
      </ul>
    </div>
</div>
  );
}

export default Navbar;
