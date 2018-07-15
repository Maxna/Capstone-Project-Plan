import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from './Header';
import Navbar from './Navbar';
import SportsList from './SportsList';
import SportsFootball from './SportsFootball';

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
        <div>
          <Navbar/>
        </div>
        <Switch>
          <Route exact path='/' component={SportsList} />
          <Route path='/sportsinfo' component={SportsFootball} />
        </Switch>
    </div>
  );
}

export default App;
