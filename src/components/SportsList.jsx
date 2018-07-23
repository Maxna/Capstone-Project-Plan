import React from 'react';
import SportsCard from './SportsCard';

function SportsList() {
  return (
<div>
<style jsx>{`
.sportsList {
display: grid;
grid-template-columns: 3fr 3fr 3fr;
grid-gap: 10px;
grid-padding: 10px;
justify-content: space-around;
font-family: sans-serif;
margin: 20px;
}
`}</style>
    <div className='sportsList'>
      <SportsCard
        name="Football"
        summary="Put the egg shaped ball into the opponents end zone"/>
      <SportsCard
        name="Basketball"
        summary="Put the ball through the opponents hoop"/>
      <SportsCard
        name="Baseball"
        summary="Get back to home plate"/>
      <SportsCard
        name="Hockey!"
        summary="Put the puck into the opponents goal"/>
      <SportsCard
        name="Soccer"
        summary="Put the ball into the opponents goal"/>
      <SportsCard
        name="Tennis"
        summary="Hit the ball into the opponents square"/>
</div>
</div>
);
}

export default SportsList;
