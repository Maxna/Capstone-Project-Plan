import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from './Header';
import HomePage from './HomePage';
import SportsList from './SportsList';
import SportsFootball from './SportsFootball';
import SportsBaseball from './SportsBaseball';
import SportsBasketball from './SportsBasketball';
import SportsHockey from './SportsHockey';
import SportsSoccer from './SportsSoccer';
import SportsTennis from './SportsTennis';
import Footer from './Footer';
import NewFeedbackForm from './NewFeedbackForm';
import Error404 from './Error404';

function App(){
  return (
    <div>
      <style jsx global>{`
        body{
          background-color: aliceblue;
          margin: 0px;
          padding-bottom: 0rem;
          position: relative;
          min-height: 100%;
        }
        html{
          height: 100%;
        }
      `}</style>
      <Header/>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/allSports' component={SportsList} />
        <Route path='/detailFootball' component={SportsFootball} />
        <Route path='/detailBaseball' component={SportsBaseball} />
        <Route path='/detailBasketball' component={SportsBasketball} />
        <Route path='/detailHockey' component={SportsHockey} />
        <Route path='/detailSoccer' component={SportsSoccer} />
        <Route path='/detailTennis' component={SportsTennis} />
        <Route path='/newfeedbackform' component={NewFeedbackForm} />
        <Route component={Error404}/>
      </Switch>
      <Footer/>
    </div>
  );
}

export default App;
