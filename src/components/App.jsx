import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from './Header';
import Navbar from './Navbar';
import SportsList from './SportsList';
import SportsCard from './SportsCard';
import HomePage from './HomePage';

function App(){
  const main = {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr 1fr',
    gridGap: '10px',
    padding: '10px',
  };

  return (
    <div>
      <Header/>
      <div style={main}>
        <div>
          <Navbar/>
        </div>
        <Switch>
          <Route exact path='/' component={SportsList} />
          <Route path='/sportsinfo' component={SportsFootball} />
        </Switch>
      </div>
    </div>
  );
}

export default App;
