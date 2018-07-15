import React from 'react';
import { Link } from 'react-router-dom';

function Header(){
  return (
<div>
<style jsx>{`
.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-family: sans-serif;
  padding: 0 5px;
  min-width: 625px;
  color: #333;
}
.headerItemGroup {
  display: flex;
  list-style: none;
  padding: 5px;
}
.headerItem {
  border: 2px solid #2795dc;
  border-radius: 15px;
  padding: 10px 20px;
  margin-left: 20px;
  font-size: 14px;
}
`}</style>
    <div className='header'>
      <div className='headerItemGroup'>
        <button className='headerItem'>Menu</button>
        <button className='headerItem'>
        <Link to='/' className='headerItem'>Home</Link>
        </button>
      </div>
    </div>
</div>
  );
}

export default Header;