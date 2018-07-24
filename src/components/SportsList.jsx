import React from 'react';
import SportsCard from './SportsCard';
import footballImg from '../assets/images/touchdown.jpeg'
import baseballImg from '../assets/images/dodgers.jpg'
import basketballImg from '../assets/images/basketball.jpg'
import tennisImg from '../assets/images/halep.jpg'
import soccerImg from '../assets/images/whitney.jpg'
import hockeyImg from '../assets/images/gretzky.jpg'

function SportsList() {
  return (
    <div>
      <style jsx>{`
.sportsList {
display: grid;
grid-template-columns: 2fr 2fr;
grid-gap: 10px;
grid-padding: 10px;
justify-content: space-around;
font-family: sans-serif;
margin: 20px;
align-items: center;
}
`}</style>
      <div className='sportsList'>
        <SportsCard
          sportImg={footballImg}
          name="Football"/>
        <SportsCard
          sportImg={basketballImg}
          name="Basketball"/>
        <SportsCard
          sportImg={baseballImg}
          name="Baseball"/>
        <SportsCard
          sportImg={hockeyImg}
          name="Hockey!"/>
        <SportsCard
          sportImg={soccerImg}
          name="Soccer"/>
        <SportsCard
          sportImg={tennisImg}
          name="Tennis"/>
      </div>
    </div>
  );
}

export default SportsList;
