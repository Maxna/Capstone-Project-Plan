import React from 'react';
import Friend from './Friend';

let masterFriendsList = [
  {
    name: 'Mike',
  },
  {
    name: 'Matt',
  },
  {
    name: 'Mark',
  },
  {
    name: 'Mitch',
  }
];

function FriendsList(){
  const friendsList = {
    border: '2px solid #ccc',
    padding: '10px 25px',
    fontFamily: 'sans-serif'
  };

  const h2 = {
    fontSize: '18px',
    color: '#333'
  };

  return (
    <div style={friendsList}>
      <h2 style={h2}>Friends List</h2>
      {masterFriendsList.map((friend, index) =>
        <Friend
          name={friend.name}
          img={friend.img}
          key={index} />
      )}
    </div>
  );
}

export default FriendsList;
