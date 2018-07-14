import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Navbar from './Navbar';
import Profile from './Profile';
import Bio from './Bio';
import SocialFeed from './SocialFeed';
import FriendsList from './FriendsList';
import NewFeedPostForm from './NewFeedPostForm';

function App(){
  const main = {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr 1fr',
    gridGap: '10px',
    padding: '10px',
  };



  return (
    <div>
      <Navbar/>
      <div style={main}>
        <div>
          <Profile/>
          <Bio/>
        </div>
        <Switch>
          <Route exact path='/' component={SocialFeed} />
          <Route path='/newfeedpost' component={NewFeedPostForm} />
        </Switch>
        <FriendsList/>
      </div>
    </div>
  );
}

export default App;
