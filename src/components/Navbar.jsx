import React from 'react';
import { Link } from 'react-router-dom';

function Navbar(){
  return (
<div>
<style jsx>{`
.navbar {
  display: flex;
  align-items: center;
  font-family: sans-serif;
  padding: 0 25px;
  min-width: 625px;
  color: #333;
  border-bottom: 2px solid #ccc;
}
.navTabGroup {
  display: flex;
  list-style: none;
  padding: 0;
}
.navTab {
  border: 1px solid gray;
  padding: 10px 20px;
  margin-left: -1px;
}
`}</style>
    <div style={navbar}>
      <ul style={navTabGroup}>
        <li Link to='/SportsCard' style={navTab}>Football</li>
        <li Link to='/SportsCard' style={navTab}>Basketball</li>
        <li Link to='/SportsCard' style={navTab}>Baseball</li>
        <li Link to='/SportsCard' style={navTab}>Hockey</li>
        <li Link to='/SportsCard' style={navTab}>Soccer</li>
        <li Link to='/SportsCard' style={navTab}>Tennis</li>
      </ul>
    </div>
</div>
  );
}

export default Navbar;
