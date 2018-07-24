import React from 'react';
import { Link } from 'react-router-dom';
import tuscan from '../assets/images/Tuscan.svg';

function HomePage() {
  const text = {
    color: 'black',
    textDecoration: 'none',
  };
  return (
    <div>
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
  border: 2px solid orange;
  border-radius: 20px;
  padding: 10px 20px;
  margin-left: -1px;
  background-color: lightblue;
}
h2 {
text-align: center;
justify-content: center;
}
`}</style>
      <div className='login'>
        <h2>SPORTSBASE</h2>
        <img className='logo' src={tuscan} alt='Home' />
        <button className='button'>
          <Link to='/allSports' style={text}>CONTINUE</Link>
        </button>
      </div>
    </div>
  );
}

export default HomePage;