import React from 'react';

function Navbar(){
  const navbar = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    fontFamily: 'sans-serif',
    padding: '0 25px',
    minWidth: '625px',
    color: '#333',
    borderBottom: '2px solid #ccc'
  };
  const navBtnGroup = {
    display: 'flex',
    listStyle: 'none',
    padding: '0'
  };
  const navBtn = {
    border: '1px solid gray',
    padding: '10px 20px',
    marginLeft: '-1px'
  };
  const navItem = {
    border: '2px solid #2795dc',
    borderRadius: '15px',
    padding: '10px 20px',
    marginLeft: '20px',
    fontSize: '14px'
  };

  return (
    <div style={navbar}>
      <ul style={navBtnGroup}>
        <li style={navBtn}>Home</li>
        <li style={navBtn}>Notifications</li>
        <li style={navBtn}>Messages</li>
      </ul>
      <div>
        <input style={navItem} placeholder="Search"></input>
        <button style={navItem}>Tweet</button>
      </div>
    </div>
  );
}

export default Navbar;
