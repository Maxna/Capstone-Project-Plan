import React from 'react';
import { Link } from 'react-router-dom';

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
  border: 1px solid gray;
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