import React from 'react';
import tuscan from '../assets/images/Tuscan.svg';

function SportsBaseball(){
  return (
    <div>
      <style jsx>{`
  .sportsBaseball {
    background-color: beige;
    padding: 10px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .post {
    background-color: aliceblue;
    color: black;
    border-radius: 1px;
    padding: 5px 15px;
    border: none;
    text-decoration: none;
    font-size: 14px;
  }
  img {
    height: 100px;
    width: 80px;
  }
`}</style>
      <div className='sportsBaseball'>
        <img src={tuscan} alt='tuscanLogo' />
        <div>
          <h2>Baseball</h2>
        </div>
        <img src={tuscan} alt='tuscanLogo' />
      </div>
      <div className='post'>
        <h4>Summary</h4>
        <p>
     A run is scored when a runner legally advances around the bases in order and touches home plate (the place where the player started as a batter). The team that scores the most runs by the end of the game is the winner.
        </p>
        <h4>General Rules</h4>
        <p>
    The first objective of the batting team is to have a player reach first base safely. A player on the batting team who reaches first base without being called "out" can attempt to advance to subsequent bases as a runner, either immediately or during teammates' turns batting. The fielding team tries to prevent runs by getting batters or runners "out", which forces them out of the field of play. Both the pitcher and fielders have methods of getting the batting team's players out. The opposing teams switch back and forth between batting and fielding; the batting team's turn to bat is over once the fielding team records three outs. One turn batting for each team constitutes an inning. A game is usually composed of nine innings, and the team with the greater number of runs at the end of the game wins. If scores are tied at the end of nine innings, extra innings are usually played. Baseball has no game clock, although most games end in the ninth inning.
        </p>
        <h4>Overview</h4>
        <p>
    Baseball is a bat-and-ball game played between two opposing teams who take turns batting and fielding. The game proceeds when a player on the fielding team, called the pitcher, throws a ball which a player on the batting team tries to hit with a bat. The objectives of the offensive team (batting team) are to run the bases—having its runners advance counter-clockwise around four bases to score what are called "runs". The objective of the defensive team (fielding team) is to prevent runners advance around the bases.[1]
        </p>
      </div>
    </div>
  );
}

export default SportsBaseball;
