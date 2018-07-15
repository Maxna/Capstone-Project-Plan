import React from 'react';
import SportsCard from './SportsCard';

function SportsList() {
  return (
<div>
<style jsx>{`
.sportsList {
font-family: sans-serif;
border: 2px solid #ccc;
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
</div>
</div>
);
}

export default SportsList;