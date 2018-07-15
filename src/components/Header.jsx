import React from 'react';
import NavBar from './Navbar';
import { Link } from 'react-router-dom';

function Header(){
  return (
<div>
<style jsx{`
.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-family: sans-serif;
  padding: 0 25px;
  min-width: 625px;
  color: #333;
  border-bottom: 2px solid #ccc;
}
.headerItemGroup {
  display: flex;
  list-style: none;
  padding: 0;
}
.headerItem {
  border: 2px solid #2795dc;
  border-radius: 15px;
  padding: 10px 20px;
  margin-left: 20px;
  font-size: 14px;
}
`}</style>
    <div style={header}>
      <div style={headerItemGroup}>
        <button style={headerItem}>Menu</button>
        <button style={headerItem}>Home</button>
      </div>
    </div>
</div>
  );
}

export default Header;