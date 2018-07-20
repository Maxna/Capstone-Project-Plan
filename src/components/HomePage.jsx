import React from 'react';
import { Link } from 'react-router-dom';

function HomePage() {
  return (
<div>
      <style jsx>{`
  p {
    text-indent: 30pt;
  }
.login {
}
.logo {
}
.button {
}
`}</style>
    <div className='login'>
<div className='logo'>
<h2>SPORTSBASE</h2>
</div>
<div className='button'>
<button><Link to='/allSports'>Continue</Link></button>
</div>
    </div>
</div>
)
}

export default HomePage;