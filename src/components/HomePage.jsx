import React from 'react';
import { Link } from 'react-router-dom';
import tuscan from '../assets/images/Tuscan.svg';

function HomePage() {
  const text = {
    color: 'black',
    textDecoration: 'none',
  };
  const main = {
    backgroundColor: 'aliceblue',
  };
  return (
    <div style={main}>
      <style jsx>{`
          .login {
            display: grid;
            justify-content: center;

          }
          .logo {
            height: 200px;
            width: 200px;
            margin: 20px;
          }
          .button {
            border: 1px solid whitesmoke;
            border-radius: 20px;
            padding: 10px 20px;
            margin-left: -1px;
            background-color: lightblue;
            width: 100%;
            cursor: pointer;
          }
          .button2 {
            border: 1px solid whitesmoke;
            border-radius: 20px;
            padding: 10px 20px;
            margin-left: -1px;
            background-color: #ffb833;
            width: 100%;
            cursor: pointer;
          }
          h2 {
            text-align: center;
            justify-content: center;
          }
`}</style>
      <div className='login'>
        <h2>SPORTSBASE</h2>
        <img className='logo' src={tuscan} alt='Home' />
        <Link to='/allSports'>
          <button className='button' style={text}>Sign In</button>
        </Link>
        <Link to='/allSports'>
          <button className='button2' style={text}>Continue without Signing In</button>
        </Link>
      </div>
    </div>
  );
}

export default HomePage;
