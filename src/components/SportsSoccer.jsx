import React from 'react';
import tuscan from '../assets/images/Tuscan.svg';

function SportsSoccer(){
  return (
    <div>
      <style jsx>{`
  .sportsSoccer {
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
      <div className='sportsSoccer'>
        <img src={tuscan} alt='tuscanLogo' />
        <div>
          <h2>Soccer</h2>
        </div>
        <img src={tuscan} alt='tuscanLogo' />
      </div>
      <div className='post'>
        <h4>Summary</h4>
        <p>
    Association football, more commonly known as football or soccer,[a] is a team sport played between two teams of eleven players with a spherical ball. It is played by 250 million players in over 200 countries and dependencies, making it the world's most popular sport.[5][6][7][8] The game is played on a rectangular field with a goal at each end. The object of the game is to score by moving the ball beyond the goal line into the opposing goal.
        </p>
        <h4>General Rules</h4>
        <p>
    Players are not allowed to touch the ball with hands or arms while it is in play, save for the goalkeepers within the penalty area. Other players mainly use their feet to strike or pass the ball, but may also use any other part of their body except the hands and the arms. The team that scores most goals by the end of the match wins. If the score is level at the end of the game, either a draw is declared or the game goes into extra time or a penalty shootout depending on the format of the competition. Association football is governed internationally by the International Federation of Association Football (FIFA; French: Fédération Internationale de Football Association), which organises World Cups for both men and women every four years.[9]
        </p>
        <h4>Overview</h4>
        <p>
          Association football, more commonly known as football or soccer,[a] is a team sport played between two teams of eleven players with a spherical ball. It is played by 250 million players in over 200 countries and dependencies, making it the world's most popular sport.[5][6][7][8] The game is played on a rectangular field with a goal at each end. The object of the game is to score by moving the ball beyond the goal line into the opposing goal.

      Association football is one of a family of football codes which emerged from various ball games played worldwide since antiquity. The modern game traces its origins to 1863 when the Laws of the Game were originally codified in England by The Football Association.
        </p>
      </div>
    </div>
  );
}

export default SportsSoccer;
