import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from './Header';
import Navbar from './Navbar';
import HomePage from './HomePage';
import SportsList from './SportsList';
import SportsFootball from './SportsFootball';
import Error404 from './Error404';
import PropTypes from 'prop-types';

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
<Route exact path='/' component={HomePage} />
          <Route path='/allSports' component={SportsList} />
          <Route path='/detailSports' component={SportsFootball} />
<Route component={Error404}/>
        </Switch>
    </div>
  );
}

export default App;
