import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from './Header';
import Navbar from './Navbar';
import HomePage from './HomePage';
import SportsList from './SportsList';
import SportsFootball from './SportsFootball';
import SportsBaseball from './SportsBaseball';
import SportsBasketball from './SportsBasketball';
import SportsHockey from './SportsHockey';
import SportsSoccer from './SportsSoccer';
import SportsTennis from './SportsTennis';
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
      <Navbar/>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/allSports' component={SportsList} />
        <Route path='/detailFootball' component={SportsFootball} />
        <Route path='/detailBaseball' component={SportsBaseball} />
        <Route path='/detailBasketball' component={SportsBasketball} />
        <Route path='/detailHockey' component={SportsHockey} />
        <Route path='/detailSoccer' component={SportsSoccer} />
        <Route path='/detailTennis' component={SportsTennis} />
        <Route component={Error404}/>
      </Switch>
    </div>
  );
}

export default App;
